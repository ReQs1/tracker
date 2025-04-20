ALTER TABLE "application" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "application" ALTER COLUMN "date" SET DEFAULT now();