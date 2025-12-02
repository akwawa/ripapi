-- Seed data for development
-- DO NOT RUN IN PRODUCTION

-- Insert default roles
INSERT INTO roles (id, name, description) VALUES
('admin', 'Administrator', 'Full system access'),
('user', 'User', 'Standard user access'),
('readonly', 'Read Only', 'Read-only access');

-- Insert test user (password: test123)
-- Note: In real implementation, this should be properly hashed with Argon2
INSERT INTO users (id, username, email, password_hash, is_admin) VALUES
('test-user-1', 'testuser', 'test@ripapi.dev', 'CHANGE_ME_HASH', 0);

-- Assign user role to test user
INSERT INTO user_roles (user_id, role_id) VALUES
('test-user-1', 'user');

-- Insert sample collection
INSERT INTO collections (id, name, description, owner_id, visibility) VALUES
('sample-collection-1', 'Sample API Collection', 'Example collection with sample requests', 'test-user-1', 'private');

-- Insert sample REST request
INSERT INTO requests (id, collection_id, name, protocol, method, url, headers, position) VALUES
('sample-request-1', 'sample-collection-1', 'Get Users', 'rest', 'GET', 'https://jsonplaceholder.typicode.com/users', '{"Content-Type": "application/json"}', 1);

-- Insert sample GraphQL request
INSERT INTO requests (id, collection_id, name, protocol, method, url, body, position) VALUES
('sample-request-2', 'sample-collection-1', 'GraphQL Query', 'graphql', 'POST', 'https://api.example.com/graphql', '{"query": "{ users { id name } }"}', 2);
