/// <reference path="./typings/tsd.d.ts" />

// Events
import {TabEvents} from "./events/tab.ts";
import {WidgetEvents} from "./events/widget.ts";
import {WidgetInstanceEvents} from "./events/widget_instance.ts";
import {RosEvents} from "./events/ros.ts";
import {WorkspaceEvents} from "./events/workspace.ts";

// Super
// import {db} from "./super/db";
import {lightbox} from "./super/lightbox.ts";
import {storage} from "./super/storage.ts";
import {Frontend} from "./super/frontend.ts";

// Models
import {Widget} from "./model/widget";
import {Workspace} from "./model/workspace";
import {currentWorkspace} from "./model/workspace";

function init() {
  $(document).ready(function () {
    var ros: ROSLIB.Ros = new ROSLIB.Ros("");
    window["ros"] = ros;
    events(ros);
    lightbox.CreateLightbox();
    // storage.Init();
    insertWidgets();
  });
}

function events(ros: ROSLIB.Ros): void {
  let tabEvents: TabEvents = new TabEvents();
  let widgetEvents: WidgetEvents = new WidgetEvents(ros);
  let widgetInstanceEvents: WidgetInstanceEvents = new WidgetInstanceEvents(ros);
  let rosEvents: RosEvents = new RosEvents(ros);
  let workspace: WorkspaceEvents = new WorkspaceEvents();
}

function insertWidgets(): void {
  // load list of available widgets
  new Widget("Topic Viewer", "TopicViewer", "./widgets/topic_viewer");
  new Widget("Param Viewer", "ParamViewer", "./widgets/param_viewer");
  new Widget("Service Viewer", "ServiceViewer", "./widgets/service_viewer");
  new Widget("Google Maps GPS Viewer", "GoogleMapsGpsViewer", "./widgets/gmaps_gps");
  new Widget("Camera Viewer", "CameraViewer", "./widgets/camera_viewer");
  new Widget("Laser Scan Viewer", "LaserScanViewer", "./widgets/laser_scan_viewer");
}

init();

