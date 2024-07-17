// Example of an interface in TypeScript

interface AuthenticationFlow {
    startAuthentication(): void;
    verifyAuthentication(token: string): boolean;
    endAuthentication(): void;
}
