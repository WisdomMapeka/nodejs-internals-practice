# nodejs-internals-practice

Step 3 — Managing the MongoDB Service


-checks the status of the MongoDB service:
sudo systemctl status mongod

-You can stop the service anytime by typing:
sudo systemctl stop mongod

-To start the service when it’s stopped, run:
sudo systemctl start mongod

-You can also restart the server when it’s already running:
sudo systemctl restart mongod

-In Step 2, you enabled MongoDB to start automatically with the server. If you ever wish to disable this automatic startup, type:
sudo systemctl disable mongod

-Then to re-enable it to start up at boot, run the enable command again:
sudo systemctl enable mongod

For more information on how to manage systemd services, check out Systemd Essentials: Working with Services, Units, and the Journal.