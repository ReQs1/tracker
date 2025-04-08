CREATE TABLE "application" (
	"id" text PRIMARY KEY NOT NULL,
	"company_name" text NOT NULL,
	"position" text NOT NULL,
	"status" text NOT NULL,
	"date" timestamp NOT NULL,
	"notes" text NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "todo" CASCADE;--> statement-breakpoint
ALTER TABLE "application" ADD CONSTRAINT "application_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;