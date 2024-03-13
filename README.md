# Netflix_Clone
The Home Page consists of 5 main sections:

1) Header, which includes:

Logo: it redirects you to the home page when you click on it.

Sign-in button: it redirects you to the sign-in page.

Feature title & subtitle: It shows the main sentences of the website.

2) Optform: It's a text input field and a button, It redirects you to the sign-up page once you click on the button.

3) Jumbotron: This section contains some images and paragraphs beside it, showing the advantages of Netflix. The data of this Jumbotron came from jumbo.json file.

4) Frequently Asked Questions: This section contains the FAQs in a form of accordion, when you click anywhere in the gray area of the question the answer appears below it, and then you can close the answer by clicking again on the same gray area of the question. The data of these FAQs came from faqs.json file.

5) Footer: It contains useful links users may need it.

**The Browse Page consists of 5 main sections:**

1) Header, which includes: 

Logo: it redirects you to the home page whenever you click it.

Categories Links: It shows the movies of a specific category when you click on it, for example, if you click on the films link it will be active and the browse page will show only the films. And if you click on the series link it will be active and the browse page will show only the series.

Featured Movie Title & Description: It shows the title and description of the featured movie.

Play Button: it shows the video player to play the movie.

2) Movies Slides: It's a slides shows the movies based on their genre. The genres and all movie information had been retrieved from the Firebase database.

3) Movie Card: It's an image represent the movie, when you hover over it became bigger and it will show its card feature if you click on it.

4) Card Feature: it's another section that appears under the movie slide if you click on any movie card, it contains more information about the movie like title, description, a special background represent the movie, and play button. when you click on the play button it shows the video player to play the movie. and you can close the card feature by clicking on the close icon in the top right corner of the card feature.

5) Video Player: it's a video player that has full controls, appears in the middle of the screen when you click on any play button, and you have to click on the play icon in the video player after it show up because it doesn't have an autoplay option currently. And when the video player show up the whole screen became an overlay, and only the video appears in the middle, and when you scroll up and down the video player moves with you. The video player should show the video of this movie which you clicked on it, but for this project purpose, it shows only one video as a sample for all movies.
