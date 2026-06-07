#!/bin/sh
set -e

DB_PORT="${DATABASE_PORT:-5432}"

export DATABASE_URL="postgresql://$DATABASE_USERNAME:$DATABASE_PASSWORD@db:$DATABASE_PORT/$DATABASE_DB?schema=template"

# Install dependencies if node_modules is missing
if [ ! -d node_modules ]; then
	bun install --frozen-lockfile --ignore-scripts
fi

# Wait for PostgreSQL to be available
while ! nc -z db "$DATABASE_PORT"; do
	echo "Waiting for Postgres..."
	sleep 5
done

echo "Postgres is up - running migrations"

# Run migrations (placeholder - update when a migration tool is added)
# bun run migrate
echo "Migration command placeholder - update once a migration tool is configured"
