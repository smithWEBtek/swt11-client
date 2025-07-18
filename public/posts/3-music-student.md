### Piano Student CMS - Sinatra Project

This application tracks the songlists for piano students. Students can sign up, select from existing repertoire, and add/remove songs from their songlist. When they add a new song, it becomes available to all students as an option to include in their respective songlists.

### VIDEO WALKTHROUGH

_Song_
has_many :students, through: :student_songs
has_many :student_songs

_Student_
has_many :songs, through: :student_songs
has_many :student_songs

_StudentSong_
belongs_to :student
belongs_to :song

### FUNCTIONALITY:

All students can view each other’s song lists, but only a logged in student can edit his/her own song list. Songlists, Students and Songs are all listed dynamically, alphabetically. LINKS to the various pages appear based on the functionality of a given page.

EXAMPLE: For example the home page, only shows these options:
welcome

EXAMPLE: Then, once logged in, these optionsi appear: Piano Students CMS App HOME _ SIGNUP _ LOGIN _ LOGOUT _ STUDENTS _ SONGS _ MY SONGS \_ EDIT MY SONGS
logged-in

Almost all of the pages have the following data, to help me track which/whether a user was logged in. Notice it change if you navigate to a fellow student's songlist. (this doesn't change the current_user though.)

logged-in

I made use of the “locals” message feature to display content based on whether a user is logged in or not. EXAMPLE on main index page: logged-in

If someone tries to hack the URL to see students data without logging in, they are redirected back to the home page to signup/login. However, a logged-in student could type in the URL and see other student’s song lists, (same as if they navigated there as part of the expected behavior of the app). Again, the logged-in student can view other student’s song lists, but cannot edit them.

Each song is hyperlinked to a page that shows a list of all students who have this song in their song list.

logged-in

Logout captures the exiting user in a variable to say a personal “goodbye” and keep practicing!

logged-in

### CHALLENGE: patch '/students/:id/songs'

patch

My biggest challenge was in updating the Student’s songlist.

I needed to be able to:

- Capture the list of songs the student checked.
- Compare that list with the student’s existing list, and add any that were new.
- Remove any that were now absent, based on the student’s checkbox choices.
- Add a new song if the student created one in the text box provided.

I had a challenge because I was scraping the existing StudentSongs table AFTER having added a new song fromt the text box. So when I finally did my scrape earlier, then added the new song, it worked.

I also struggled with setting up my form params in such a way as to make the update process work.

### RESTFUL-NESS

I tried to follow the REST patterns as well as I could. The code is probably ripe for refactoring as I currently tend to have to make 'cave man' code first before I can refine.

The attributes in the forms also are not second nature to me yet, although this video helped: http://flatiron-videos.s3.amazonaws.com/ruby-006/sinatra-testing-nested-forms.mp4 This really helped me understand how I can control params at the form before they are posted.

I feel like more repetition will improve my speed, and although it is grueling to grind through the process, I can tell that I am internalizing the concepts.

There seems to be a balance needed between doing labs, experimenting on my own (to internalize), watching lecture videos (after my labs and experimentation), Googling problems and error messages, and reading Ruby books (again after labs & experimenting).

I realize that I will need to get more "legit" in terms of working with other developers, following conventions and getting code out the door within a reasonable time. The abiltiy to absorb new complexity and quantity of new concepts is a specific mind=muscle challenge. But, thankfully I find that I have the tenacity to keep at it until things work!
