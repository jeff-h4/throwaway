# throwaway

Project Stack: Angular2 w/ Typescript, Rails 5.1, mySQL, Jest

# Database: MySQL
## Setup
We need to install mySQL.
```
sudo apt-get update
sudo apt-get install mysql-server mysql-client libmysqlclient-dev
```

For reference, on Ubuntu 16.04 LTS, this installed:
```
mysql  Ver 14.14 Distrib 5.7.21, for Linux (x86_64) using  EditLine wrapper
```
The install will prompt you to set a mySQL root user password. Set one.

It seems that when using the Ubuntu LTS 16.04 native apt repo to install mysql,
the installation automaticaly setup the database directory. So I skipped running
```sudo mysql_install_db``` as per a tutorial.
Also the command itself seems to be out of date after mySQL 5.7.5

Execute ```sudo mysql_secure_installation``` to remove some dangerous defaults.

For Rails, we need to make sure the Gemfile has the right version of mysql2.
Add ```gem 'mysql2', '>= 0.3.18', '< 0.5'``` to the Gemfile and do a ```bundle install```.
NOTE: When I didn't specify a version, bundler installed mysql2 v0.5.0, and rake wouldn't be able to create a database.
By generating a separate test app, I found that the above versions were specified, and that resolved the issue.

By default, the generated config/database.yml file will use the 'root' mySQL user.
This is a bad practice from a security standpoint, so we need to make another project-specific user, and grant
the permissions needed for accessing the project database.

Launch the mySQL console as the root user, then execute:
```
CREATE USER 'throwaway_user'@'localhost' IDENTIFIED BY 'some_password';
SELECT User,host FROM mysql.user;
GRANT ALL ON `db_throwaway\_%`.* TO 'throwaway_user'@'localhost';
```
The db_throwaway\_% syntax will allow the user privileges on db_throwaway_* databases.

In config/database.yml, ensure the
- database name
- username
- user's password
are set correctly.
I have set the password to the ENV THROWAWAY_USER_MYSQL_PASSWORD. This was exported from my .zshrc.

# Test runner: Jest
## Reference
https://medium.com/@kylefox/how-to-setup-javascript-testing-in-rails-5-1-with-webpacker-and-jest-kef7130a4c08e

## Setup Notes and Limitations
Jest has been setup just enough so that ```yarn test``` will run. The reference article mentions some setup for Babel, but this is not setup in this project yet. As a result, ```import``` statements might not work.

## Usage
Run ```yarn test``` to execute tests once
If you want Jest to watch for changing test files, run ```yarn test --watchAll```
