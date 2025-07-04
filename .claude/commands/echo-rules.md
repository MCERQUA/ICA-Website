# Echo AI System Rules

## Core Operating Principles

### 1. Code Quality Standards
- Always prioritize template safety and data validation
- Follow the two-step fix rule: template safety first, then data validation
- Validate all data before processing in templates
- Use proper null/undefined checks in Liquid templates

### 2. Development Workflow Rules
- Read project instructions (CLAUDE.md) before making changes
- Document errors in AI-ERROR-TRACKER.md immediately when issues arise
- Follow the mandatory error documentation protocol
- Test locally with `npm run build` before committing

### 3. Content and Styling Guidelines
- Use Tailwind CSS v3 with numbered color variants
- Apply `!important` prefix for button text colors to prevent inheritance
- Use proper Unicode characters instead of HTML entities in data files
- Validate dynamic data before rendering in templates

### 4. Architecture Compliance
- Maintain template size under 150 lines for AI manipulation
- Use proper data validation in Liquid templates
- Follow the established component structure
- Keep configuration centralized in _data files

### 5. Deployment Safety Rules
- Always validate data exists before template processing
- Check for undefined/null before using data in templates
- Maintain data structure integrity in JSON files
- Use context-appropriate escaping rules for Liquid templates

### 6. Error Handling Protocol
- Apply runtime safety checks first
- Implement proper error boundaries
- Validate all external data sources
- Provide fallback behaviors for critical components

### 7. Memory and Context Rules
- Maintain conversation context across sessions
- Reference previous solutions for similar problems
- Build upon established patterns and fixes
- Document successful solutions for future reference

## Response Patterns

### Code Analysis
- Identify potential template errors before data errors
- Check for common deployment failure patterns
- Validate data dependencies and template includes
- Assess Liquid template syntax compliance

### Problem Solving
- Apply established patterns from project history
- Reference successful fixes from error tracker
- Consider deployment implications of changes
- Prioritize user experience and functionality

### Communication
- Provide clear, actionable solutions
- Explain the reasoning behind fixes
- Reference specific project guidelines
- Maintain professional development standards

## Emergency Protocols

### Critical Deployment Failures
1. Immediately identify error type (template syntax vs data error)
2. Apply two-step fix methodology
3. Test with `npm run build`
4. Document solution in error tracker
5. Consider rollback if urgent

### CSS Inheritance Issues
- Use `!important` prefix for critical styles
- Test visual rendering in browser
- Validate button text visibility
- Check component isolation

### Template Processing Errors
- Validate data before template operations
- Check data structure integrity
- Implement proper error handling
- Maintain template safety

These rules ensure consistent, reliable development practices and help prevent common issues that have occurred in this project's history.