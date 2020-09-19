    function buildStory(coordX, coordY,scene) {
      //a function to build a room animation logic
      // passed parameters: coordX, coordY - these are for a room center coordinates
      npcGroup = scene.physics.add.group({
          immovable: true
      });
      arrScenes = [
        {
          sceneId: 0,
          sceneName: 'lockYourComputer',
          cCoordX : coordX,
          cCoordY : coordY,
          animNPCGroup : [
            {
              id: 0,
              isActive: false,
              objType: 'DECORATION',
              npcName: 'compDesk1',
              defaultKey: 'compDeskOpen',
                npcCoordX : (280),
                npcCoordY : (720),
              animPath: [
                { pathX: 0, pathY: 0, velocityX: 0, velocityY: 0 }
              ],
              animList: [
                {
                  key: 'compDeskOpen',
                  frames: { spriteName: 'compDesk4x4', start: 0, end: 3 },
                  frameRate: 5,
                  repeat: -1
                },
                {
                  key: 'compDeskLock',
                  frames: { spriteName: 'compDesk4x4', start: 4, end: 7 },
                  frameRate: 5,
                  repeat: -1
                }
              ]
            },
            {
              id: 1,
              isActive: true,
              objType: 'NPC',
              npcName: 'HSoloSingleImg',
              defaultKey: 'standFace',
                npcCoordX : (440),
                npcCoordY : (720),
              animPath: [
                { pathX: 200, pathY: 0, velocityX: 100, velocityY: 0 }
              ],
              animList: [
                {
                  key: 'standFace',
                  frames: { spriteName: 'HSoloSingleImg', start: 0, end: 0 },
                  frameRate: 1,
                  repeat: -1
                },
                {
                  key: 'walkUp',
                  frames: { spriteName: 'HSoloMan', start: 4, end: 7 },
                  frameRate: 5,
                  repeat: -1
                },
                {
                  key: 'walkDown',
                  frames: { spriteName: 'HSoloMan', start: 8, end: 11 },
                  frameRate: 5,
                  repeat: -1
                },
                {
                  key: 'walkLeft',
                  frames: { spriteName: 'HSoloMan', start: 0, end: 3 },
                  frameRate: 5,
                  repeat: -1
                },
                {
                  key: 'walkRight',
                  frames: { spriteName: 'HSoloMan', start: 12, end: 15 },
                  frameRate: 5,
                  repeat: -1
                }
              ]
            }
          ],
          animText: [
            {
              id: 0,
              txtLabel: 'EmplSpeech',
              txtStr: 'Ok, I need to find my patient and add some important information before lunch...',
              txtTimeToShow: 15,
            },
            {
              id: 1,
              txtLabel: 'EmplSpeech',
              txtStr: 'Oh, its almost noon! I need to go to the cafeteria now!',
              txtTimeToShow: 15,
            },
            {
              id: 2,
              txtLabel: 'CompScreenMsg',
              txtStr: 'Please enter your user name and password!',
              txtTimeToShow: 10,
            },
            {
              id: 3,
              txtLabel: 'CompScreenMsg1',
              txtStr: 'Patients records access allowed!',
              txtTimeToShow: 10,
            }
          ]
        }
      ];
      //====================
      // let deltaX = Math.floor(coordX * 400);
      // let deltaY = Math.floor(coordY * 260);
      //====================
      for (let k=0; k< arrScenes.length; k++) {
        // going over an array: arrScenes
        var sceneAnimGrp = arrScenes[k].animNPCGroup;
        console.log("===> arrScenes Objects[",k,"]",arrScenes[k]);
        sceneTxtHolder.push(arrScenes[k].animText);

        for (let i=0; i < sceneAnimGrp.length; i++) {
          //animNPCGroup
            var myObj = sceneAnimGrp[i];
            var objActive = myObj.isActive;
            var objType = myObj.objType;
            var sceneCoordX = myObj.npcCoordX;
            var sceneCoordY = myObj.npcCoordY;
            var npcName = myObj.npcName;
            var npcDefaultKey = myObj.defaultKey;
          for (let m=0; m < myObj.animList.length; m++ ) {
            //reading animation parameters:
              var animKey = myObj.animList[m].key;
              var animSprite = myObj.animList[m].frames.spriteName;
              var animStart = myObj.animList[m].frames.start;
              var animEnd = myObj.animList[m].frames.end;
              var animFrameRate = myObj.animList[m].frameRate;
              var animRepeat = myObj.animList[m].repeat;
              //building animation resources:
              scene.anims.create({
                  key: animKey,
                  frames: scene.anims.generateFrameNumbers(animSprite, {start: animStart, end: animEnd}),
                  frameRate: animFrameRate,
                  repeat: animRepeat
              });
          }
            console.log("===> sceneAnimGrp animKey[",i,"]",animKey);
            // create an object and place it to the group:
            if (objType === 'NPC') {
              // use myObj.standFace to set standing posture:
              var myDude = npcGroup.create(sceneCoordX, sceneCoordY, npcName).setScale(1); //doors keys (dude)
              //activate default animation:
              myDude.anims.play(npcDefaultKey, false);
            } else if (objType === 'DECORATION') {
              // use myObj.standFace to set standing posture:
              var myDude = npcGroup.create(sceneCoordX, sceneCoordY, npcName).setScale(1); //doors keys (dude)
              //activate default animation:
              myDude.anims.play(npcDefaultKey, false);
            } else {
              //unknown type!
              console.log("!!! Alert: Animation object type unknown!");
            }
            myDude.moveVector = 1;
            myDude.isActive = objActive;
            myDude.objType = objType;
            myDude.npcDefaultKey = npcDefaultKey;
            myDude.roomCoord = {
              x: Math.floor(sceneCoordX / 800) ,
              y: Math.floor(sceneCoordY / 520)
            } ;
            myDude.animText = arrScenes[k].animText;
        }
      }
    }
