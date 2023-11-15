import type { RequestEvent } from "@sveltejs/kit";
// ... other code
export function handleLoginRedirect(event: RequestEvent) {
	const redirectTo = event.url.pathname + event.url.search;
	return `/login?redirectTo=${redirectTo}`;
}
