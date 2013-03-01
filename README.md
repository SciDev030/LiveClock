# LiveClock PRO/ LITE #
## Version 3.2 / Source Code ##

### Authors ###
[SciDev][] / 
[SciDev]: http://www.scidev.eu/
* Marco Büttner
* Pierre Kretschmar

### LICENCE ###

GPLv3 / see read more on [http://www.gnu.org](http://www.gnu.org/licenses/gpl.txt "GPLv3 Licence")

### Known Issues ###

* main.js: *widgetgoasleep*, *widgetsleepawakend*, *widgetendkey*, *widgetlocaltimecanged*, *widgetorientationchanged* events does not work on Android and other platforms (except SHP, bada)
* settings.js: *widget.getPreferenceKey* and *widget.setPreferenceKey* method does not work on Android and other platforms (except SHP, bada)
* Simulator: The simulator can not handle the events above and return on the startup maybe some errors

### Requirements ###

We recommend to install Eclipse Helios 3.6 (Classic, EE, Java or JavaScript) or higher and the latest version of the [http://developer.samsung.com](http://developer.samsung.com/widgets/tools-sdks/Samsung-Mobile-Widget-SDK-version-1-3-1-Release "Samsung Mobile SDK"). Also make sure that you have install Java 1.6 or higher.
