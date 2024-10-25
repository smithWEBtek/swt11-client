003-012-revised-v2.md

# PIANO SEARCH - RUBY CLI GEM

## Command Line Interface Application

Using Ruby and Nokogiri to scrape Craigslist, this CLI application searches for the two most popular models of Yamaha piano: the model U2 and the model P22. Similar to buying a Toyota Corolla or Camry, these Japanese-made pianos are very solid investments.

### Summary

**Version 0.1.0 PianoSearch**

- Searches Boston Craigslist Musical Instruments for Yamaha P22 or Yamaha U1 pianos for sale.
- Prompts user to choose 'Yamaha piano model U1' or 'P22'.
- Displays a list, including prices and headlines of existing posts.
- Prompts user to choose a post number to see details.
- Displays the Price, Location, Headline, and Description (post text) for the chosen post.
- Prompts user to choose another post number, 'list' to restart, or 'x' to exit.

### Business Application

The Ruby Gem PianoSearch provides a basic measurement of used piano sales in Boston, allowing a piano dealer insight into the "competition" in the used piano market. Potential buyers face the decision of whether to buy used or new. The two piano models in PianoSearch are good measures of the market, similar to the Toyota Corolla and Toyota Camry in the auto market.

### Concept

The idea for this Gem comes from the basic premise that a business should be doing three things with their data:

1. Measuring what happened
2. Predicting what will happen
3. Comparing competitor data

#### 1. Measuring

Measuring what happened today, yesterday, this week, last month, last year, and comparing those time frames in meaningful ways to steer the business.

#### 2. Predicting

Deducing from data measurements the things that will likely happen in the future. For example, knowing that your donut shop sells out of chocolate most Friday nights compared to almost zero chocolate donut sales on most Monday nights is valuable insight. This can help with cash flow, product freshness, and strategic planning for adding more workers on Friday nights if needed.

#### 3. Comparing

Leveraging business data to answer questions both past and future is essential to any enterprise that measures itself. Comparison data incorporates other data sets into the past and future data so that the business can now answer deeper questions than simply "what happened?" or "what might happen?".

### Technical Flow and Functionality in PianoSearch Version 0.1.0

#### Main URLs

The PianoSearch Gem 0.1.0 is statically coded to the Boston Craigslist Musical Instruments section. This is accomplished with two static URLs in two separate methods for scraping the existing post headlines.

#### Use of Nokogiri

These URLs are scraped using Nokogiri and Open-Uri for both the initial post headlines and the subsequent post details.

#### Methods in Class `PianoSearch::Post`

- **`self.scrape_clu1`**

  1. Scrapes the main URL for "Yamaha U1", saving results in the `@posts` array.
  2. Calls the `self.scrape_posts` method.

- **`self.scrape_clp22`**

  1. Scrapes the main URL for "Yamaha P22", saving results in the `@posts` array.
  2. Calls the `self.scrape_posts` method.

- **`self.scrape_posts`**

  1. Scrapes the `@posts` array to extract `post_id` for each post, to be used in creating its URL.
  2. Calls the `self.create_urls` method.

- **`self.create_urls`**

  1. Appends the post id to "http://boston.craigslist.org/"<post_ID>.html".
  2. Calls the `self.show_headings` method.

- **`self.show_headings`**

  1. Outputs a row for each post, including a Post Number and Headline.

- **`self.scrape_detail`**

  1. Creates an array (`@post_ary`) of post hashes, including price, headline, location, and description.

- **`self.show_detail(input)`**
  1. Takes in the user's input choice as an index number.
  2. Displays the appropriate post hash corresponding to the user input number.

### Methods and Functionality of `PianoSearch::CLI`

#### Class `PianoSearch::CLI` Workflow

- **`call`**
- **`start`**

  - Outputs: "🎹 Welcome to Boston Craigslist Piano Search 🎹"
  - Prompts: "Please enter model number u1 or p22"
  - Menu shows list of posts for the chosen model: `p22` or `u1`
  - Calls `PianoSearch::Post.scrape_clu1` or `PianoSearch::Post.scrape_clp22`
  - Calls `PianoSearch::Post.show_headings`

- **`menu` method**
  - `count = PianoSearch::Post.scrape_posts.count` (uses count of posts to limit valid input choices)
  - Prompts: "Enter [digit] for details, [list] for list, or [exit]."
  - Calls `PianoSearch::Post.scrape_detail` to produce detailed post hashes.
  - Menu options:
    - `list` (calls `start`)
    - `exit` (calls `goodbye`)
    - `else` (invalid entry)
  - **`goodbye`**
    - Outputs: "🎹 Thank you for searching 🎹"
  - User input (number) is passed to:
    - `PianoSearch::Post.show_detail(input.to_i-1)`
    - **`self.show_detail(input)`**
      1. Takes in the user's input choice as an index number.
      2. Displays the appropriate post hash corresponding to the user input number, including price, headline, location, and description.

### Example

---

$2250 Beautiful Yamaha Piano (Stoughton)

Piano is a gorgeous Polished Walnut and looks like it has just come from the factory (made in Thomaston, Georgia). One owner, lightly driven by a little old lady. :) Purchased new from Boston Organ and Piano in 1996, Model P22, Serial Number 210067. Includes piano bench - bench has a few dings.

🎹🎹🎹🎹

### Future Functionality

Added functionality will include:

1. Choice of user State and Area within that U.S. State to replace the static URLs in the current version.
   - Note: Areas are represented by 3 letters immediately preceding the post_id. States are not directly represented in URLs. The syntax is as follows:
     - "http://[state_area].craigslist.org/[3 letter area acronym]/[10 digit post_id].html"
2. Use of Ruby Gem: Pony or Mail to provide the user the option of having the search sent daily in email.
3. Expanded details, including DateTime posted, geo-coordinates for GoogleMaps, and other post details.
4. Reply to capture, providing the foundation for automated outreach to ads proposing to buy the pianos at a pre-determined fraction of the price, assuming they pass onsite inspection by a qualified technician.
5. Pushing of this list to pre-qualified buyers seeking pianos. This would augment the business of a technician or piano mover, intent on generating new opportunities for technical work or moving.
6. Expansion of options to include national search.
7. Expansion of options to choose additional sections for searching.
8. Combination with related scraping projects, such as:
   - Promotion of music instruction.
   - Organizations in need of donated pianos.
   - "Make a wish" types of opportunities to provide a piano for a talented child in a low-income family.

## Conclusion

Everyone ought to have some music (and some Ruby) in their life!

---

# Piano Student CMS - Sinatra Project

This application tracks the song lists for piano students. Students can sign up, select from existing repertoire, and add/remove songs from their song list. When they add a new song, it becomes available to all students as an option to include in their respective song lists.

### Video Walkthrough

**Song**

- `has_many :students, through: :student_songs`
- `has_many :student_songs`

**Student**

- `has_many :songs, through: :student_songs`
- `has_many :student_songs`

**StudentSong**

- `belongs_to :student`
- `belongs_to :song`

### Functionality

All students can view each other’s song lists, but only a logged-in student can edit his/her own song list. Song lists, Students, and Songs are all listed dynamically, alphabetically. Links to the various pages appear based on the functionality of a given page.

#### Example

For example, the home page only shows these options:

- Welcome

Then, once logged in, these options appear:

- Piano Students CMS App
  - Home
  - Signup
  - Login
  - Logout
  - Students
  - Songs
  - My Songs
  - Edit My Songs

Almost all of the pages have the following data to help track which/whether a user was logged in. Notice it changes if you navigate to a fellow student's song list. (This doesn't change the current_user though.)

If someone tries to hack the URL to see students' data without logging in, they are redirected back to the home page to signup/login. However, a logged-in student could type in the URL and see other students' song lists, (same as if they navigated there as part of the expected behavior of the app). Again, the logged-in student can view other students' song lists but cannot edit them.

Each song is hyperlinked to a page that shows a list of all students who have this song in their song list.

Logout captures the exiting user in a variable to say a personal “goodbye” and keep practicing!

### Challenge: `patch '/students/:id/songs'`

My biggest challenge was in updating the Student’s song list.

I needed to be able to:

- Capture the list of songs the student checked.
- Compare that list with the student’s existing list and add any that were new.
- Remove any that were now absent, based on the student’s checkbox choices.
- Add a new song if the student created one in the text box provided.

I had a challenge because I was scraping the existing StudentSongs table AFTER having added a new song from the text box. So when I finally did my scrape earlier, then added the new song, it worked.

I also struggled with setting up my form params in such a way as to make the update process work.

### RESTfulness

I tried to follow the REST patterns as well as I could. The code is probably ripe for refactoring as I currently tend to have to make 'cave man' code first before I can refine.

The attributes in the forms also are not second nature to me yet, although this video helped: [Sinatra Testing Nested Forms](http://flatiron-videos.s3.amazonaws.com/ruby-006/sinatra-testing-nested-forms.mp4). This really helped me understand how I can control params at the form before they are posted.

I feel like more repetition will improve my speed, and although it is grueling to grind through the process, I can tell that I am internalizing the concepts.

There seems to be a balance needed between doing labs, experimenting on my own (to internalize), watching lecture videos (after my labs and experimentation), Googling problems and error messages, and reading Ruby books (again after labs & experimenting).

I realize that I will need to get more "legit" in terms of working with other developers, following conventions, and getting code out the door within a reasonable time. The ability to absorb new complexity and quantity of new concepts is a specific mind-muscle challenge. But, thankfully, I find that I have the tenacity to keep at it until things work!

---

# Diet-Tracker

Diet-Tracker is a basic CMS (Content Management System) for users to track their meals and log their experiences while following a particular diet. This Rails application was developed as part of the Learn.co Full Stack Web Development course. If you are not familiar with [Flatiron School](https://flatironschool.com/), please check it out!

![Diet Tracker](https://res.cloudinary.com/smithwebtek/image/upload/v1492046956/diet-tracker/image001.png?raw=true)

## Major Components

- Foods
- Meals
- Groups (food groups)
- Diets
- Users

### Food

- Food belongs to a specific Group (Dairy, Vegetables, Fruits, etc.).
- Food has a default calories value of 1 upon creation but can be set to the user's choice.
- Users can create a new Food and suggest a Group, but Admin controls editing of Foods/Groups.
- Food calories are tracked by User-meal and by Group, so we have stats on how many calories the Vegans are eating, how many meals, and average calories per meal.
- Same goes for Users; we track food calories, number of meals, and average calories per meal.

### Group

- Groups (food groups) are mostly categorical in this version.
- Future versions could build views and stats on Groups, comparing outcomes with user eating habits.

### Diet

- Diets are tracked similarly to Food calories, and a user can view Diet Stats showing the stats for their diet, aggregating all users on that diet.
- The Diet Stats can show how your (Diet) group's stats can suffer if you fall off the wagon and eat 7 cheeseburgers while on the Vegetarian diet, for example.
- Only Admins can create new Diets.

### Meal

- The heart of the app is the new Meal(s) form, where a user can input 3 meals for a day (breakfast, lunch, and dinner). Each meal is a separate new instance of the Meal class and requires a Date, Food, and Quantity. Note/memo is optional; all are captured using the custom attributes method `meals_attributes=` in the User model.
- Food can be selected (for each meal) via a collection_select (dropdown) menu, or the user can enter a new Food for that meal.
- If a new Food, the entry is compared with the Database to find_or_create it, so there are not multiple matching foods.
- Quantity is a number that multiplies whatever the calorie amount is in the particular Food chosen. This product is added up with other users on your same diet.

![Meal Form](https://res.cloudinary.com/smithwebtek/image/upload/v1492046956/diet-tracker/image002.png?raw=true)

### User (Standard)

#### Registration

- Users can register via signup form or use Omni-auth via Facebook.
- Users can be either Standard or Admin (role), default is `standard`.
- Only an Admin can access the form to edit a user's role and make them an Admin.

#### User Functions

- **View**

  - Users can see all Foods, Groups, Diets, and Diet Stats, but they can't edit them.
  - Users can create new Foods via Meals nested form.

- **Diet**

  - Each user is on a single diet at a time.
  - Users can change their diet and are prompted to choose a diet if they didn't choose during registration.
  - Users can view DietStats, showing the progress of all users on the same diet.

- **Meals**

  - See Meal above.

- **Logs**
  - Users can create logs with a date and
