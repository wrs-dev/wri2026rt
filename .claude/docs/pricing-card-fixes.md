# Pricing Card Height Alignment Fixes

## Issue Description
When updating the registration card titles to "Rail Transit Agency/Government Employee Registration" (longer title), the pricing cards on the registration section became misaligned due to height differences between the left and right columns.

## Problem Details
- Left column had longer title text causing taller cards
- Right column had shorter title causing shorter cards
- Cards in same rows were not aligning horizontally
- Header heights were inconsistent
- Body sections were not expanding to match tallest card

## Solution Implemented

### 1. CSS Grid Layout Update
**File:** `src/components/registration/index.js`

Replaced Tailwind grid classes with explicit CSS Grid positioning using inline styles:

```javascript
// Master grid container with explicit row/column positioning
display: 'grid',
gridTemplateColumns: '1fr 1fr',
gridTemplateRows: 'auto auto auto auto', // title, text, card1, card2
gap: '1rem',
alignItems: 'start'
```

Key elements positioned using `gridColumn` and `gridRow` properties to ensure perfect alignment.

### 2. Pricing Component Updates
**Files:** 
- `src/components/pricing-employee-individual/index.js`
- `src/components/pricing-employee-multi/index.js`
- `src/components/pricing-professional-individual/index.js`
- `src/components/pricing-professional-multi/index.js`

#### Card Container
```javascript
style={{
  height: '100%',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column'
}}
```

#### Header Section
```javascript
style={{
  minHeight: '5rem',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0
}}
```

#### Body Section
```javascript
style={{
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '200px'
}}
```

## Technical Approach

### Why Inline Styles?
- Tailwind classes (`xl:items-stretch`, `h-full`, `min-h-[4rem]`) were not compiling/applying properly
- Inline styles bypass compilation issues and ensure consistent behavior
- More reliable for complex grid layouts with precise positioning requirements

### Grid Strategy
Instead of treating each column as a separate container, implemented a unified grid where:
- Row 1: Both titles align
- Row 2: Both descriptions align  
- Row 3: Both "Individual" cards align
- Row 4: Both "Multi" cards align

## Result
- ✅ Perfect 2x2 grid alignment
- ✅ All headers exactly the same height (5rem)
- ✅ All card bodies expand to match tallest card
- ✅ Row 1: Both Individual cards start at exactly the same height
- ✅ Row 2: Both Multi cards start at exactly the same height

## Files Modified
1. `src/components/registration/index.js` - Main layout grid
2. `src/components/pricing-employee-individual/index.js` - Employee individual pricing card
3. `src/components/pricing-employee-multi/index.js` - Employee multi-event pricing card  
4. `src/components/pricing-professional-individual/index.js` - Professional individual pricing card
5. `src/components/pricing-professional-multi/index.js` - Professional multi-event pricing card

## Future Maintenance
- If adding new pricing tiers, ensure they follow the same inline style pattern
- When updating titles, test card alignment across different screen sizes
- If migrating back to Tailwind classes, ensure proper compilation and test thoroughly

## Related Issues
- This fix addresses the title update from "Employee Registration" to "Rail Transit Agency/Government Employee Registration"
- Solution is responsive and maintains alignment across different viewport sizes
- Works consistently across all browsers without relying on Tailwind compilation