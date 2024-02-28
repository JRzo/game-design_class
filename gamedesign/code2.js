gdjs.final_95levelCode = {};
gdjs.final_95levelCode.GDPlatformObjects1= [];
gdjs.final_95levelCode.GDPlatformObjects2= [];
gdjs.final_95levelCode.GDBombGuyObjects1= [];
gdjs.final_95levelCode.GDBombGuyObjects2= [];
gdjs.final_95levelCode.GDFullMoonObjects1= [];
gdjs.final_95levelCode.GDFullMoonObjects2= [];
gdjs.final_95levelCode.GDBlueSpaceObjects1= [];
gdjs.final_95levelCode.GDBlueSpaceObjects2= [];
gdjs.final_95levelCode.GDSapphireGemObjects1= [];
gdjs.final_95levelCode.GDSapphireGemObjects2= [];
gdjs.final_95levelCode.GDRedHouse2Objects1= [];
gdjs.final_95levelCode.GDRedHouse2Objects2= [];
gdjs.final_95levelCode.GDPlatform2Objects1= [];
gdjs.final_95levelCode.GDPlatform2Objects2= [];


gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDBombGuyObjects1Objects = Hashtable.newFrom({"BombGuy": gdjs.final_95levelCode.GDBombGuyObjects1});
gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDSapphireGemObjects1Objects = Hashtable.newFrom({"SapphireGem": gdjs.final_95levelCode.GDSapphireGemObjects1});
gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDBombGuyObjects1Objects = Hashtable.newFrom({"BombGuy": gdjs.final_95levelCode.GDBombGuyObjects1});
gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDRedHouse2Objects1Objects = Hashtable.newFrom({"RedHouse2": gdjs.final_95levelCode.GDRedHouse2Objects1});
gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDBombGuyObjects1Objects = Hashtable.newFrom({"BombGuy": gdjs.final_95levelCode.GDBombGuyObjects1});
gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDPlatform2Objects1Objects = Hashtable.newFrom({"Platform2": gdjs.final_95levelCode.GDPlatform2Objects1});
gdjs.final_95levelCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BlueSpace"), gdjs.final_95levelCode.GDBlueSpaceObjects1);
gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.final_95levelCode.GDBombGuyObjects1);
{for(var i = 0, len = gdjs.final_95levelCode.GDBlueSpaceObjects1.length ;i < len;++i) {
    gdjs.final_95levelCode.GDBlueSpaceObjects1[i].setX(gdjs.final_95levelCode.GDBlueSpaceObjects1[i].getX() + (20 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.final_95levelCode.GDBombGuyObjects1.length ;i < len;++i) {
    gdjs.final_95levelCode.GDBombGuyObjects1[i].addForce(150, 0, 0);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.final_95levelCode.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SapphireGem"), gdjs.final_95levelCode.GDSapphireGemObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDBombGuyObjects1Objects, gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDSapphireGemObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.final_95levelCode.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedHouse2"), gdjs.final_95levelCode.GDRedHouse2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDBombGuyObjects1Objects, gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDRedHouse2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game_done", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.final_95levelCode.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.final_95levelCode.GDPlatform2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDBombGuyObjects1Objects, gdjs.final_95levelCode.mapOfGDgdjs_9546final_959595levelCode_9546GDPlatform2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "final_level", false);
}}

}


};

gdjs.final_95levelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.final_95levelCode.GDPlatformObjects1.length = 0;
gdjs.final_95levelCode.GDPlatformObjects2.length = 0;
gdjs.final_95levelCode.GDBombGuyObjects1.length = 0;
gdjs.final_95levelCode.GDBombGuyObjects2.length = 0;
gdjs.final_95levelCode.GDFullMoonObjects1.length = 0;
gdjs.final_95levelCode.GDFullMoonObjects2.length = 0;
gdjs.final_95levelCode.GDBlueSpaceObjects1.length = 0;
gdjs.final_95levelCode.GDBlueSpaceObjects2.length = 0;
gdjs.final_95levelCode.GDSapphireGemObjects1.length = 0;
gdjs.final_95levelCode.GDSapphireGemObjects2.length = 0;
gdjs.final_95levelCode.GDRedHouse2Objects1.length = 0;
gdjs.final_95levelCode.GDRedHouse2Objects2.length = 0;
gdjs.final_95levelCode.GDPlatform2Objects1.length = 0;
gdjs.final_95levelCode.GDPlatform2Objects2.length = 0;

gdjs.final_95levelCode.eventsList0(runtimeScene);

return;

}

gdjs['final_95levelCode'] = gdjs.final_95levelCode;
