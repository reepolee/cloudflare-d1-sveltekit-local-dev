CREATE TABLE `countries` (
	`id` integer PRIMARY KEY NOT NULL,
	`code` text,
	`name` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `countries_code_unique` ON `countries` (`code`);