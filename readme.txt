=== Awesome Support - WordPress Support Plugin ===

Contributors: themeavenue,julien731,siamkreative
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KADEESTQ9H3GW
Tags: support,helpdesk,tickets,ticketing,help,support staff,
Requires at least: 3.5.1
Tested up to: 4.1
Stable tag: 3.1.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

The most advanced support plugin for WordPress. Provide awesome support straight from your WordPress site.

== Description ==

Awesome Support is the most advanced support plugin for WordPress. It is the result of two years of work, research, and improvement. Most of its features are an answer to user requests for a helpdesk and that's what makes it the best support plugin for WordPress.

For support please visit the [official site](http://getawesomesupport.com).

= Seamless Integration =

No complicated installation here! Awesome Support was built in a way that makes it compatible with 99% of all existing themes, be it free or commercial. It is "plug & play" meaning  all settings and templates are ready to work as soon as you click the "Activate" button.

= Responsive Design =

Awesome Support provides an optimal viewing experience; easy reading and navigation with a minimum of resizing, panning, and scrolling. Have a client that needs to submit a ticket on the go? No worries! The plugin is responsive. Your client will have a smooth and pleasant experience even from the convenience of their mobile phone (as long as the theme you use is responsive).

= Robust Code =

Version 3 of this support plugin was built with flexibility in mind; the code is clean, well-documented and full of hooks. If you need a   custom support system, Awesome Support will let you do almost anything you want or need.

Awesome Support relies on the [Titan Framework](http://www.titanframework.net/) to handle plugin options. This framework is built by expert WordPress developers and well-maintained on GitHub.

= What does it do? =

Check out all of the awesome, user-friendly features of this plugin:

- **Ticketing**: users submit tickets from the front-end, agents cherish them from the back-end
- **E-mail notifications**: whenever someone does something, the interested parties are notified by e-mail and all e-mails are customizable
- **Restricted access**: everything you say is strictly private. It all stays between the client and the agents
- **File upload**: you control when files can be uploaded, how many and how big
- **Multiple products**: provide support for as many products as you want
- **Custom fields**: need more fields? You have full control over it
- **Terms & conditions**: ask users to approve your terms before they can raise a ticket
- **Old tickets**: identify old tickets in a second thanks to the tags

= Extensions =

Packed with features, once activated Awesome Support is ready to give you world-class support.  If you want to go even further though, we've got you covered: dozens of add-ons will allow you to extend the plugin's possibilities and gain even more productivity. To check out the available add-ons please visit the official site [getawesomesupport.com](http://getawesomesupport.com).

= Roadmap =

Want to know what’s next for Awesome Support? [Check out the roadmap](https://trello.com/b/pHYdtkHc). You can also vote for the ideas you like best!

== Installation ==

= Using The WordPress Dashboard =

1. Navigate to the 'Add New' in the plugins dashboard
2. Search for 'Awesome Support'
3. Click 'Install Now'
4. Activate the plugin on the Plugin dashboard

= Uploading in WordPress Dashboard =

1. Download `awesome-support.zip` from this page
2. Navigate to the 'Add New' in the plugins dashboard
3. Navigate to the 'Upload' area
4. Select `awesome-support.zip` from your computer
5. Click 'Install Now'
6. Activate the plugin in the Plugin dashboard

= Using FTP =

1. Download `awesome-support.zip` from this page
2. Extract the `awesome-support` directory to your computer
3. Upload the `awesome-support` directory to the `/wp-content/plugins/` directory
4. Activate the plugin in the Plugin dashboard

= Setup =

Whatever the method you used, after you activated the plugin through the plugins dashboard, the setup is done silently in the background.

Two new pages will be added to your site:

- My Tickets
- Submit ticket

Add those two pages to your menu in order to give your users easy access to their support area.

== Frequently Asked Questions ==

= The plugin data isn't removed from the database after uninstall =

If you want to delete the plugin and all of its data, you need to go to the *Advanced* tab in the plugin settings and check the *Delete Data* option. Only then the data will be removed from the database during the uninstall process.

= Users get "You do not have the capacity to open a new ticket" =

Normally, when a user registers through the plugin, he is given the role *Support User*. [This role has special capabilities](http://codex.wordpress.org/Roles_and_Capabilities).

If your users get the error message *"You do not have the capacity to open a new ticket"*, it means that they don't have the special capabilities.

Here you have two choices:

1. Change all your users' role to *Support User*
2. Give the role you want to use (eg. *Subscriber*) the special capabilities

If you don't know how to add new capabilities to a role, I suggest you use a plugin like [User Role Manager](https://wordpress.org/plugins/user-role-editor/) and give the desired role the following capabilities:

- `view_ticket`
- `create_ticket`
- `close_ticket`
- `reply_ticket`
- `attach_files`

**Do not give your users more than those 5 capabilities**, otherwise they could get administrative privileges.

== Screenshots ==

1. Agent's view (tickets list)
2. Agent's view (ticket details)
3. Agent creates a ticket
4. Client view (tickets list)
5. Client view (ticket details)
6. Client creates a ticket
7. Settings page

== Changelog ==

= 3.1.3 =

* Add Gist oEmbed support
* Add the `WPAS_DISABLE_AUTO_ASSIGN` to disable auto-assignment
* Add URL field for custom fields
* Show login form to non logged-in users on ticket details page
* Fix compatibility issue with WP Members
* Fix random agent assignment when re-assigning an open ticket
* Fix issue with e-mail notifications sent to the wrong agent
* Only show open tickets when filtering by status
* Fix bug preventing ticket with no replies from being deleted
* Don't show the current status when ticket is closed
* Fix bug with tags not filtering correctly in the admin
* Correctly load translations
* Add Select2 for users and tickets dropdowns
* Do not count trashed posts in the admin menu

= 3.1.2 =

* Fix issue with first reply being added twice
* Fix issue with HTML e-mail notifications if multiple notifications are sent by the same instance
* Use the user display name in the stakeholders metabox
* Set the ticket as "In Progress" after first reply in a more reliable way
* Add new hooks

= 3.1.1 =

* Do not override custom templates for the ticket details page
* Send HTML e-mails more reliably
* Bugfixes

= 3.1.0 =

* Add new filters before registering the post type
* Add a logging class that can be used for debugging purposes
* Add support for e-commerce plugins when multi-products is enabled (currently supports WooCommerce, Easy Digital Downloads, WP eCommerce and Jigoshop)
* Ask for a password only once on the registration form
* Add e-mail verification to the registration form (uses MailGun, free account required)
* Hide about page from the menu
* Allow e-mail to be used as the login for clients
* Improve agent assignment function
* Re-written and optimized e-mail notification class (with a wrapper function `wpas_email_notify()`)
* Filter subject and body on e-mail notifications
* Let the user specify a reply-to e-mail for notifications
* Make the display of ticket details more secure (to avoid conflicts with plugins/themes)
* Use users display name instead of user name everywhere on the site
* Don't display agents in the clients list of the stakeholders metabox
* Fix issue with the blank page after login
* Fixed some notices on the ticket single page
* Few bugfixes

= 3.0.1 =

* Display taxonomies drop-downs hierarchically
* Add new hooks in the user registration process ([81a278a](https://github.com/ThemeAvenue/Awesome-Support/commit/81a278a807d3d41bbfc9327908365f3eff07e34a))
* Filter the value returned by `wpas_get_option()`
* Minor bugfixes and improvements

= 3.0.0 =

* The Phoenix reborn. An entirely new version of Awesome Support

== Upgrade Notice ==

Lots of bugfixes

== Roadmap ==

Want to know what’s next for Awesome Support? [Check out the roadmap](https://trello.com/b/pHYdtkHc). You can also vote for the ideas you like best!

== Add-Ons ==

Need to extend Awesome Support's features? We have lots of add-ons to help you setup the perfect support site. [Check out our add-ons page](http://getawesomesupport.com/addons/?utm_source=wordpress.org&utm_medium=other-notes&utm_campaign=Extend).