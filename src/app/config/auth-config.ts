import {PassedInitialConfig}  from "angular-auth-oidc-client";
function getWindowLocationOrigin() {
  return typeof window !== 'undefined' ? window.location.origin : '';
}
export const authConfig: PassedInitialConfig = {
  config:{
    authority: 'http://localhost:8181/realms/spring-microservices-security-realm',
    redirectUrl: getWindowLocationOrigin(),
    postLogoutRedirectUri: getWindowLocationOrigin(),
    clientId: 'angular-client',
    scope:'openid profile offline_access',
    responseType:'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30 * 60 * 1000,
  }
}
