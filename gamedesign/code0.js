gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDWoodBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDWoodBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDBarrelObjects1= [];
gdjs.Untitled_32sceneCode.GDBarrelObjects2= [];
gdjs.Untitled_32sceneCode.GDRedBottleObjects1= [];
gdjs.Untitled_32sceneCode.GDRedBottleObjects2= [];
gdjs.Untitled_32sceneCode.GDTableObjects1= [];
gdjs.Untitled_32sceneCode.GDTableObjects2= [];
gdjs.Untitled_32sceneCode.GDWindowsObjects1= [];
gdjs.Untitled_32sceneCode.GDWindowsObjects2= [];
gdjs.Untitled_32sceneCode.GDDoorObjects1= [];
gdjs.Untitled_32sceneCode.GDDoorObjects2= [];
gdjs.Untitled_32sceneCode.GDBombGuyObjects1= [];
gdjs.Untitled_32sceneCode.GDBombGuyObjects2= [];
gdjs.Untitled_32sceneCode.GDPlatformObjects1= [];
gdjs.Untitled_32sceneCode.GDPlatformObjects2= [];
gdjs.Untitled_32sceneCode.GDCaptainObjects1= [];
gdjs.Untitled_32sceneCode.GDCaptainObjects2= [];
gdjs.Untitled_32sceneCode.GDIntruductions_9595GameObjects1= [];
gdjs.Untitled_32sceneCode.GDIntruductions_9595GameObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBombGuyObjects1Objects = Hashtable.newFrom({"BombGuy": gdjs.Untitled_32sceneCode.GDBombGuyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCaptainObjects1Objects = Hashtable.newFrom({"Captain": gdjs.Untitled_32sceneCode.GDCaptainObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBombGuyObjects1Objects = Hashtable.newFrom({"BombGuy": gdjs.Untitled_32sceneCode.GDBombGuyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Untitled_32sceneCode.GDDoorObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.Untitled_32sceneCode.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.Untitled_32sceneCode.GDCaptainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBombGuyObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCaptainObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.Untitled_32sceneCode.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Untitled_32sceneCode.GDDoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBombGuyObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", false);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDWoodBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWoodBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBarrelObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBarrelObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedBottleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedBottleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTableObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTableObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWindowsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWindowsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDoorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDoorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBombGuyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBombGuyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatformObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatformObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCaptainObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCaptainObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDIntruductions_9595GameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDIntruductions_9595GameObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
