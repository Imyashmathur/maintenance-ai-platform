
import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel({
    serviceName: "maintenance_ai_platform_complete-frontend",
  });
}
