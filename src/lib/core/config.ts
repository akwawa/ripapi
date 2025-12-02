import type { AppConfig } from './types';

/**
 * Application configuration
 * Centralized configuration management with environment variable support
 */

/**
 * Get environment variable with fallback
 */
function getEnv(key: string, defaultValue: string = ''): string {
    if (typeof process !== 'undefined' && process.env) {
        return process.env[key] || defaultValue;
    }
    return defaultValue;
}

/**
 * Parse boolean from environment variable
 */
function getEnvBool(key: string, defaultValue: boolean = false): boolean {
    const value = getEnv(key);
    if (value === '') return defaultValue;
    return value === 'true' || value === '1';
}

/**
 * Parse number from environment variable
 */
function getEnvNumber(key: string, defaultValue: number = 0): number {
    const value = getEnv(key);
    if (value === '') return defaultValue;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? defaultValue : parsed;
}

/**
 * Default application configuration
 */
export const config: AppConfig = {
    database: {
        url: getEnv('DATABASE_URL', './data/ripapi.db'),
        type: (getEnv('DATABASE_TYPE', 'sqlite') as 'sqlite' | 'postgres' | 'mysql') || 'sqlite'
    },
    security: {
        secretKey: getEnv('SECRET_KEY', 'change-me-in-production'),
        tokenExpiration: getEnvNumber('TOKEN_EXPIRATION', 3600), // 1 hour
        saltRounds: getEnvNumber('SALT_ROUNDS', 10)
    },
    modules: {
        enabled: getEnv('ENABLED_MODULES', 'auth-local,api-rest').split(','),
        config: {}
    },
    features: {
        offline: getEnvBool('FEATURE_OFFLINE', false),
        pwa: getEnvBool('FEATURE_PWA', false),
        analytics: getEnvBool('FEATURE_ANALYTICS', false)
    }
};

/**
 * Get module configuration
 * @param moduleId - Module ID
 * @returns Module-specific configuration or empty object
 */
export function getModuleConfig<T = unknown>(moduleId: string): T {
    return (config.modules.config[moduleId] as T) || ({} as T);
}

/**
 * Set module configuration
 * @param moduleId - Module ID
 * @param moduleConfig - Configuration to set
 */
export function setModuleConfig(moduleId: string, moduleConfig: unknown): void {
    config.modules.config[moduleId] = moduleConfig;
}

/**
 * Check if a feature is enabled
 * @param feature - Feature name
 * @returns True if feature is enabled
 */
export function isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
    return config.features[feature];
}
