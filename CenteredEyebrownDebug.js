//================================================================================//
// Required Modules //
//================================================================================//
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Diagnostics = require('Diagnostics');
//================================================================================//

//================================================================================//
// Declared constant and variables //
//================================================================================//
const face = FaceTracking.face(0);
const eyebrowns = Scene.root.find('eyebrowns');
//================================================================================//

//================================================================================//
// Declare the EyebrownRight from the class and normalize the value, then watch the value //
//================================================================================//
var eyebrownRight = FaceTracking.face(0).rightEyebrow.top.y.sub(5);
Diagnostics.watch("eyebrownRight - ", eyebrownRight)
//================================================================================//

//================================================================================//
// Declare the EyebrownLeft from the class and normalize the value, then watch the value //
//================================================================================//
var eyebrownLeft = FaceTracking.face(0).leftEyebrow.top.y.sub(5);
Diagnostics.watch("eyebrownLeft - ", eyebrownLeft)
//================================================================================//

//================================================================================//
// Sync the desired Obj with the movement of the right eyebrown //
//================================================================================//
eyebrowns.transform.y = eyebrownRight;
//================================================================================//
