gdjs.level2Code = {};
gdjs.level2Code.GDPlatformObjects1= [];
gdjs.level2Code.GDPlatformObjects2= [];
gdjs.level2Code.GDWindowLightObjects1= [];
gdjs.level2Code.GDWindowLightObjects2= [];
gdjs.level2Code.GDWhaleObjects1= [];
gdjs.level2Code.GDWhaleObjects2= [];
gdjs.level2Code.GDHealthBarObjects1= [];
gdjs.level2Code.GDHealthBarObjects2= [];
gdjs.level2Code.GDBombGuyObjects1= [];
gdjs.level2Code.GDBombGuyObjects2= [];
gdjs.level2Code.GDHeartObjects1= [];
gdjs.level2Code.GDHeartObjects2= [];
gdjs.level2Code.GDHeart2Objects1= [];
gdjs.level2Code.GDHeart2Objects2= [];
gdjs.level2Code.GDHeart3Objects1= [];
gdjs.level2Code.GDHeart3Objects2= [];
gdjs.level2Code.GDBottomLeftCornerRedwoodBackgroundCutoutObjects1= [];
gdjs.level2Code.GDBottomLeftCornerRedwoodBackgroundCutoutObjects2= [];
gdjs.level2Code.GDHouseTallBackgroundObjects1= [];
gdjs.level2Code.GDHouseTallBackgroundObjects2= [];
gdjs.level2Code.GDWoodBackgroundObjects1= [];
gdjs.level2Code.GDWoodBackgroundObjects2= [];
gdjs.level2Code.GDWindowsObjects1= [];
gdjs.level2Code.GDWindowsObjects2= [];
gdjs.level2Code.GDCornerPlatformObjects1= [];
gdjs.level2Code.GDCornerPlatformObjects2= [];
gdjs.level2Code.GDintroductions_9595gameObjects1= [];
gdjs.level2Code.GDintroductions_9595gameObjects2= [];
gdjs.level2Code.GDDesertBackground2Objects1= [];
gdjs.level2Code.GDDesertBackground2Objects2= [];
gdjs.level2Code.GDDeadTreeObjects1= [];
gdjs.level2Code.GDDeadTreeObjects2= [];
gdjs.level2Code.GDChickenObjects1= [];
gdjs.level2Code.GDChickenObjects2= [];
gdjs.level2Code.GDDoorObjects1= [];
gdjs.level2Code.GDDoorObjects2= [];
gdjs.level2Code.GDPlatform1Objects1= [];
gdjs.level2Code.GDPlatform1Objects2= [];
gdjs.level2Code.GDdrop_9595enemyObjects1= [];
gdjs.level2Code.GDdrop_9595enemyObjects2= [];


gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDBombGuyObjects1Objects = Hashtable.newFrom({"BombGuy": gdjs.level2Code.GDBombGuyObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDWhaleObjects1Objects = Hashtable.newFrom({"Whale": gdjs.level2Code.GDWhaleObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDBombGuyObjects1Objects = Hashtable.newFrom({"BombGuy": gdjs.level2Code.GDBombGuyObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDChickenObjects1Objects = Hashtable.newFrom({"Chicken": gdjs.level2Code.GDChickenObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDBombGuyObjects1Objects = Hashtable.newFrom({"BombGuy": gdjs.level2Code.GDBombGuyObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDdrop_95959595enemyObjects1Objects = Hashtable.newFrom({"drop_enemy": gdjs.level2Code.GDdrop_9595enemyObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDBombGuyObjects1Objects = Hashtable.newFrom({"BombGuy": gdjs.level2Code.GDBombGuyObjects1});
gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.level2Code.GDDoorObjects1});
gdjs.level2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.level2Code.GDBombGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDBombGuyObjects1.length;i<l;++i) {
    if ( gdjs.level2Code.GDBombGuyObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDBombGuyObjects1[k] = gdjs.level2Code.GDBombGuyObjects1[i];
        ++k;
    }
}
gdjs.level2Code.GDBombGuyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDBombGuyObjects1.length;i<l;++i) {
    if ( !(gdjs.level2Code.GDBombGuyObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDBombGuyObjects1[k] = gdjs.level2Code.GDBombGuyObjects1[i];
        ++k;
    }
}
gdjs.level2Code.GDBombGuyObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDBombGuyObjects1 */
{for(var i = 0, len = gdjs.level2Code.GDBombGuyObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDBombGuyObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.level2Code.GDBombGuyObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDBombGuyObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.level2Code.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Whale"), gdjs.level2Code.GDWhaleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDBombGuyObjects1Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDWhaleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.level2Code.GDHeartObjects1);
/* Reuse gdjs.level2Code.GDWhaleObjects1 */
{for(var i = 0, len = gdjs.level2Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDHeartObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level2Code.GDWhaleObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDWhaleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.level2Code.GDBombGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level2Code.GDBombGuyObjects1.length;i<l;++i) {
    if ( gdjs.level2Code.GDBombGuyObjects1[i].getCenterXInScene() == 150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs.level2Code.GDBombGuyObjects1[k] = gdjs.level2Code.GDBombGuyObjects1[i];
        ++k;
    }
}
gdjs.level2Code.GDBombGuyObjects1.length = k;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.level2Code.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("DesertBackground2"), gdjs.level2Code.GDDesertBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.level2Code.GDHeartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Heart2"), gdjs.level2Code.GDHeart2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Heart3"), gdjs.level2Code.GDHeart3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.level2Code.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("WoodBackground"), gdjs.level2Code.GDWoodBackgroundObjects1);
{for(var i = 0, len = gdjs.level2Code.GDWoodBackgroundObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDWoodBackgroundObjects1[i].setX(gdjs.level2Code.GDWoodBackgroundObjects1[i].getX() + (20 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.level2Code.GDDesertBackground2Objects1.length ;i < len;++i) {
    gdjs.level2Code.GDDesertBackground2Objects1[i].setX(gdjs.level2Code.GDDesertBackground2Objects1[i].getX() + (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.level2Code.GDBombGuyObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDBombGuyObjects1[i].addForce(150, 0, 0);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.level2Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDHeartObjects1[i].addForce(150, 0, 0);
}
}{for(var i = 0, len = gdjs.level2Code.GDHeart2Objects1.length ;i < len;++i) {
    gdjs.level2Code.GDHeart2Objects1[i].addForce(150, 0, 0);
}
}{for(var i = 0, len = gdjs.level2Code.GDHeart3Objects1.length ;i < len;++i) {
    gdjs.level2Code.GDHeart3Objects1[i].addForce(150, 0, 0);
}
}{for(var i = 0, len = gdjs.level2Code.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDPlatformObjects1[i].addForce(150, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.level2Code.GDBombGuyObjects1);
{for(var i = 0, len = gdjs.level2Code.GDBombGuyObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDBombGuyObjects1[i].getBehavior("Animation").setAnimationName("Hit");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.level2Code.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Whale"), gdjs.level2Code.GDWhaleObjects1);
{for(var i = 0, len = gdjs.level2Code.GDBombGuyObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDBombGuyObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.level2Code.GDWhaleObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDWhaleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.level2Code.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.level2Code.GDChickenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDBombGuyObjects1Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDChickenObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDChickenObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Heart2"), gdjs.level2Code.GDHeart2Objects1);
{for(var i = 0, len = gdjs.level2Code.GDChickenObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDChickenObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level2Code.GDHeart2Objects1.length ;i < len;++i) {
    gdjs.level2Code.GDHeart2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.level2Code.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("drop_enemy"), gdjs.level2Code.GDdrop_9595enemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDBombGuyObjects1Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDdrop_95959595enemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level2Code.GDBombGuyObjects1 */
{for(var i = 0, len = gdjs.level2Code.GDBombGuyObjects1.length ;i < len;++i) {
    gdjs.level2Code.GDBombGuyObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.level2Code.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.level2Code.GDDoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDBombGuyObjects1Objects, gdjs.level2Code.mapOfGDgdjs_9546level2Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "final_level", false);
}}

}


};

gdjs.level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level2Code.GDPlatformObjects1.length = 0;
gdjs.level2Code.GDPlatformObjects2.length = 0;
gdjs.level2Code.GDWindowLightObjects1.length = 0;
gdjs.level2Code.GDWindowLightObjects2.length = 0;
gdjs.level2Code.GDWhaleObjects1.length = 0;
gdjs.level2Code.GDWhaleObjects2.length = 0;
gdjs.level2Code.GDHealthBarObjects1.length = 0;
gdjs.level2Code.GDHealthBarObjects2.length = 0;
gdjs.level2Code.GDBombGuyObjects1.length = 0;
gdjs.level2Code.GDBombGuyObjects2.length = 0;
gdjs.level2Code.GDHeartObjects1.length = 0;
gdjs.level2Code.GDHeartObjects2.length = 0;
gdjs.level2Code.GDHeart2Objects1.length = 0;
gdjs.level2Code.GDHeart2Objects2.length = 0;
gdjs.level2Code.GDHeart3Objects1.length = 0;
gdjs.level2Code.GDHeart3Objects2.length = 0;
gdjs.level2Code.GDBottomLeftCornerRedwoodBackgroundCutoutObjects1.length = 0;
gdjs.level2Code.GDBottomLeftCornerRedwoodBackgroundCutoutObjects2.length = 0;
gdjs.level2Code.GDHouseTallBackgroundObjects1.length = 0;
gdjs.level2Code.GDHouseTallBackgroundObjects2.length = 0;
gdjs.level2Code.GDWoodBackgroundObjects1.length = 0;
gdjs.level2Code.GDWoodBackgroundObjects2.length = 0;
gdjs.level2Code.GDWindowsObjects1.length = 0;
gdjs.level2Code.GDWindowsObjects2.length = 0;
gdjs.level2Code.GDCornerPlatformObjects1.length = 0;
gdjs.level2Code.GDCornerPlatformObjects2.length = 0;
gdjs.level2Code.GDintroductions_9595gameObjects1.length = 0;
gdjs.level2Code.GDintroductions_9595gameObjects2.length = 0;
gdjs.level2Code.GDDesertBackground2Objects1.length = 0;
gdjs.level2Code.GDDesertBackground2Objects2.length = 0;
gdjs.level2Code.GDDeadTreeObjects1.length = 0;
gdjs.level2Code.GDDeadTreeObjects2.length = 0;
gdjs.level2Code.GDChickenObjects1.length = 0;
gdjs.level2Code.GDChickenObjects2.length = 0;
gdjs.level2Code.GDDoorObjects1.length = 0;
gdjs.level2Code.GDDoorObjects2.length = 0;
gdjs.level2Code.GDPlatform1Objects1.length = 0;
gdjs.level2Code.GDPlatform1Objects2.length = 0;
gdjs.level2Code.GDdrop_9595enemyObjects1.length = 0;
gdjs.level2Code.GDdrop_9595enemyObjects2.length = 0;

gdjs.level2Code.eventsList0(runtimeScene);

return;

}

gdjs['level2Code'] = gdjs.level2Code;
