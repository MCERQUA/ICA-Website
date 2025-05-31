# Website Cleanup Progress Tracker

## ✅ Phase 3: Individual Page Fixes

### Completed ✓
- [x] **Attic Page** (src/services/residential/attic.njk) - Fixed 5/31 21:02
  - Removed all custom styles
  - Applied dark theme components consistently
  - Proper grid utilities used

### Priority Pages to Fix 🚨

#### High Priority - Service Pages with Custom Styles
1. [ ] **Wall Insulation** (src/services/residential/wall.njk)
   - Issue: Custom styles for heat transfer visuals
   - Fix: Apply glass-panel components, use consistent grid

2. [ ] **Blown-In Insulation** (src/services/residential/blown-in.njk)
   - Issue: Mixed styling approaches
   - Fix: Apply dark theme components

3. [ ] **Dense Pack** (src/services/residential/dense-pack.njk)
   - Issue: Inconsistent component usage
   - Fix: Standardize with dark components

4. [ ] **Removal Services** (src/services/residential/removal.njk)
   - Issue: Custom hazard styling
   - Fix: Use glass panels for warnings

5. [ ] **Spray Foam Main** (src/services/spray-foam-insulation.njk)
   - Issue: Long page with mixed styles
   - Fix: Full component migration

#### Medium Priority - Commercial/Industrial Pages
6. [ ] **Office Buildings** (src/services/commercial/office.njk)
7. [ ] **Retail Spaces** (src/services/commercial/retail.njk)
8. [ ] **Warehouses** (src/services/commercial/warehouse.njk)
9. [ ] **Manufacturing** (src/services/industrial/manufacturing.njk)
10. [ ] **Cold Storage** (src/services/industrial/cold-storage.njk)

#### Low Priority - Agricultural Pages
11. [ ] **Tank Insulation** (src/services/agricultural/tank.njk)
12. [ ] **Barn Insulation** (src/services/agricultural/barn.njk)
13. [ ] **Storage Facilities** (src/services/agricultural/storage.njk)

### Components to Apply Consistently:
- ✓ `service-card-glass.njk` - For service options
- ✓ `pricing-table-dark.njk` - For pricing sections
- ✓ `process-steps-dark.njk` - For process flows
- ✓ `faq-section-glass.njk` - For FAQs
- ✓ `cta-section-dark.njk` - For call-to-action sections

### Common Fixes Needed:
1. Remove all `<style>` tags from individual pages
2. Replace custom cards with `glass-panel` class
3. Use `grid grid-2` or `grid grid-3` utilities
4. Apply consistent color variables
5. Use established component includes

### Progress: 1/14 pages complete (7%)
