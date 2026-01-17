# Security

## Current Status

✅ **No Known Vulnerabilities**

Last audit: 2026-01-17  
Status: `found 0 vulnerabilities`

## Dependency Versions

### Core Dependencies
- **Astro**: `5.16.11` (latest, secure)
- **Tailwind CSS**: `3.4.17` (latest)
- **TypeScript**: `5.7.3` (latest)

### Security Updates

#### 2026-01-17: Fixed Astro XSS Vulnerability
- **Issue**: Reflected XSS via server islands feature in Astro <= 5.15.6
- **Action**: Updated Astro from v4.16.19 to v5.16.11
- **Patched Version**: 5.15.8
- **Current Version**: 5.16.11 ✅
- **Status**: Vulnerability resolved

## Security Best Practices

This project follows security best practices:

1. ✅ **Dependencies**: All dependencies updated to latest secure versions
2. ✅ **No Hardcoded Secrets**: No API keys or secrets in code
3. ✅ **Static Site**: No server-side vulnerabilities (static generation)
4. ✅ **Input Validation**: No user input processed (marketing site)
5. ✅ **HTTPS Ready**: Designed for HTTPS deployment
6. ✅ **CSP Ready**: Can be deployed with Content Security Policy headers

## Running Security Audits

To check for security vulnerabilities:

```bash
# Check for vulnerabilities
npm audit

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

## Reporting Security Issues

If you discover a security vulnerability, please report it by:
1. Creating a private security advisory on GitHub
2. Or emailing the repository owner

Do not create public issues for security vulnerabilities.

## Security Recommendations for Deployment

When deploying this site, we recommend:

1. **Enable HTTPS**: Always use HTTPS in production
2. **Set Security Headers**: Configure your hosting to send security headers:
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

3. **Content Security Policy**: Add CSP headers if needed:
   ```
   Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com
   ```

4. **Regular Updates**: Run `npm audit` and `npm update` regularly

## Automated Security

Consider adding automated security scanning:
- **Dependabot**: Enable on GitHub for automatic dependency updates
- **Snyk**: For continuous dependency vulnerability scanning
- **GitHub Security Scanning**: Enable security advisories

---

**Last Updated**: 2026-01-17  
**Next Review**: Check dependencies monthly or when new vulnerabilities are announced
