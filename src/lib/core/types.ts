/**
 * Core types for RipApi application
 */

/**
 * Module interface - all modules must implement this
 */
export interface Module {
    /** Unique identifier for the module */
    id: string;
    /** Human-readable name */
    name: string;
    /** Module version */
    version: string;
    /** Module description */
    description: string;
    /** Whether the module is enabled */
    enabled: boolean;
    /** Initialize the module */
    init: () => Promise<void>;
    /** Destroy/cleanup the module */
    destroy: () => Promise<void>;
}

/**
 * Module registry configuration
 */
export interface ModuleRegistryConfig {
    /** Modules to auto-initialize on startup */
    autoInit?: string[];
}

/**
 * Authentication provider interface
 */
export interface AuthProvider extends Module {
    /** Type of authentication (local, sso, kerberos, etc.) */
    type: string;
    /** Authenticate user */
    authenticate: (credentials: unknown) => Promise<AuthResult>;
    /** Validate existing token/session */
    validate: (token: string) => Promise<boolean>;
    /** Logout/revoke token */
    logout: (token: string) => Promise<void>;
}

/**
 * Authentication result
 */
export interface AuthResult {
    success: boolean;
    token?: string;
    user?: User;
    error?: string;
}

/**
 * User model
 */
export interface User {
    id: string;
    username: string;
    email: string;
    roles: string[];
    createdAt: Date;
    updatedAt: Date;
}

/**
 * API Protocol interface
 */
export interface APIProtocol extends Module {
    /** Protocol type (rest, graphql, soap) */
    protocol: string;
    /** Execute a request */
    execute: (request: APIRequest) => Promise<APIResponse>;
    /** Validate request configuration */
    validate: (request: APIRequest) => Promise<ValidationResult>;
}

/**
 * API Request configuration
 */
export interface APIRequest {
    id?: string;
    name: string;
    protocol: 'rest' | 'graphql' | 'soap';
    url: string;
    method?: string;
    headers?: Record<string, string>;
    body?: unknown;
    auth?: AuthConfig;
    variables?: Record<string, unknown>;
}

/**
 * API Response
 */
export interface APIResponse {
    status: number;
    statusText: string;
    headers: Record<string, string>;
    body: unknown;
    time: number; // Response time in ms
    size: number; // Response size in bytes
}

/**
 * Authentication configuration
 */
export interface AuthConfig {
    type: 'none' | 'basic' | 'bearer' | 'api-key' | 'oauth' | 'custom';
    credentials?: Record<string, string>;
}

/**
 * Validation result
 */
export interface ValidationResult {
    valid: boolean;
    errors: ValidationError[];
}

/**
 * Validation error
 */
export interface ValidationError {
    field: string;
    message: string;
}

/**
 * Collection model
 */
export interface Collection {
    id: string;
    name: string;
    description?: string;
    ownerId: string;
    visibility: 'private' | 'public' | 'shared';
    requests: APIRequest[];
    variables?: Record<string, unknown>;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * Collection sharing configuration
 */
export interface CollectionShare {
    collectionId: string;
    userId?: string;
    groupId?: string;
    permission: 'read' | 'write' | 'admin';
}

/**
 * Group model
 */
export interface Group {
    id: string;
    name: string;
    description?: string;
    members: string[]; // User IDs
    createdAt: Date;
    updatedAt: Date;
}

/**
 * Application configuration
 */
export interface AppConfig {
    /** Database configuration */
    database: {
        url: string;
        type: 'sqlite' | 'postgres' | 'mysql';
    };
    /** Security configuration */
    security: {
        secretKey: string;
        tokenExpiration: number; // in seconds
        saltRounds: number;
    };
    /** Module configuration */
    modules: {
        enabled: string[];
        config: Record<string, unknown>;
    };
    /** Feature flags */
    features: {
        offline: boolean;
        pwa: boolean;
        analytics: boolean;
    };
}
