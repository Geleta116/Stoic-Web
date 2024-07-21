-- Grant all global privileges to any user from any host
GRANT ALL PRIVILEGES ON *.* TO '%'@'%' WITH GRANT OPTION;

-- Flush privileges to apply changes
FLUSH PRIVILEGES;
