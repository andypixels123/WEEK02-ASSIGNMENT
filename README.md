# WEEK02-ASSIGNMENT
Responsive Image Gallery
----------------------------

# Reflection

Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?


REFLECTION
--------------------
I believe I have completed most if not all requirements. I have created a image gallery with wrap-around navigation in forwards and backwards directions via css buttons and keyboard navigation. I made use of left and right arrow keys / 'n' and 'p' keys for next and previous image navigation and keys 1-5 to select specific images. Also included are clickable thumbnails with event handlers attached. All images are responsive and can be viewed on both desktop and mobile devices. The main image is set to fill a screen but retain its aspect ratio. I added a small margin surround to improve aesthetics. Thumbnails and forward/backward navigation buttons fall below the main image at screen widths of 800px width and smaller by utilising an @media query. I have added @media queries for device orientation also. All images have 'alt' tags included and I have included some aria attributes for screen reader access.

I used a css grid layout which was a bit problematic to code correctly, I acheived this with some help from Manuel. I probably need more practice with grid and flexbox to become more familiar.

REFERENCES
--------------
I used a book entitled 'Javascript & Ajax' Visual Quickstart Guide for ideas and inspiration concerning the showNext() and showPrev() functions. I modified their functions to suit my application.

I also used W3 Schools / MDN websites for reference regarding css grid, aria attributes and information on keyboard events. I adapted a keyboard event sample code shown on the MDN website by adding a switch statement for different key presses.