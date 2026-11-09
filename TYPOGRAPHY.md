# Portfolio typography

Audit: image links were 12px, gallery captions 13px, and navigation and project details commonly 14px. Repeated overrides produced inconsistent sizing.

The shared scale is defined at the end of src/style.css using rem units. DM Sans is used for body text and controls; Playfair Display is retained for page titles.

| Role | Desktop | Small screens |
| --- | --- | --- |
| Small labels | 12px | 12px |
| Footer | 14px | 14px |
| Image captions | 15px | 15px |
| Links, navigation, project metadata | 16px | 16px |
| Body | 17px | 16px |
| Video headings | 20px | 20px |
| Project card titles | 24px | 22px |
| Section headings | 28px | 24px |
| Case-study title | 36–48px | 34px |

Body line height is 1.65. Action links are underlined in project cards and galleries; keyboard focus remains visible. Image controls remain full-card buttons, so the text size does not determine their clickable area. Content wording is unchanged.

Validation: production build and desktop browser inspection of case-study typography and gallery actions. This is not a complete accessibility audit.
