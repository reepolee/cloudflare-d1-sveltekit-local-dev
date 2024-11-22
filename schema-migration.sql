CREATE TABLE IF NOT EXISTS [countries] (
	"id" INTEGER PRIMARY KEY autoincrement,
	"code" TEXT,
	"name" TEXT,
	"created_at" TEXT DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')) NOT NULL,
	"updated_at" TEXT DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')) NOT NULL
);

CREATE UNIQUE INDEX countries_code ON countries (code);
