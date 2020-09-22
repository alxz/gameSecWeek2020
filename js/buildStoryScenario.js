
  function buildStory(coordX, coordY,scene) {
    //a function to build a room animation logic
    arrAllStories = [
        {
            storyId: 1,
            rmCoord: { x: 0, y: 1 },
            nextScene: 0,
            lastScene: 3,
            sceneList: [
                {
                    sceneId: 0,
                    spriteId: 0,
                    moveTo: 'LEFT',
                    vectorXY: { x: -1, y: 0 },
                    startXY: { x: 680, y: 720 },
                    endXY: { x: 280, y: 720 },
                    timeFrame: 10
                },
                {
                    sceneId: 1,
                    spriteId: 1,
                    moveTo: 'NO',
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 280, y: 720 },
                    endXY: { x: 280, y: 720 },
                    timeFrame: 10
                },
                {
                    sceneId: 2,
                    spriteId: 2,
                    moveTo: 'RIGHT',
                    vectorXY: { x: 1, y: 0 },
                    startXY: { x: 280, y: 720 },
                    endXY: { x: 680, y: 720 },
                    timeFrame: 10
                }
            ]
        }
    ]

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
            npcName: 'YellowDoc',
            defaultKey: 'standFace',
                      npcCoordX : (440),
                      npcCoordY : (720),
            animList: [
              {
                key: 'standFace',
                frames: { spriteName: 'yellowDocOne', start: 0, end: 0 },
                frameRate: 1,
                repeat: -1
              },
              {
                key: 'walkUp',
                frames: { spriteName: 'docOther', start: 4, end: 7 },
                frameRate: 5,
                repeat: -1
              },
              {
                key: 'walkDown',
                frames: { spriteName: 'docOther', start: 8, end: 11 },
                frameRate: 5,
                repeat: -1
              },
              {
                key: 'walkLeft',
                frames: { spriteName: 'docOther', start: 0, end: 3 },
                frameRate: 5,
                repeat: -1
              },
              {
                key: 'walkRight',
                frames: { spriteName: 'docOther', start: 12, end: 15 },
                frameRate: 5,
                repeat: -1
              }
            ]
          },
            {
                id: 2,
                isActive: true,
                objType: 'NPC',
                npcName: 'Joker',
                defaultKey: 'HSoloStandUp',
                        npcCoordX : (320),
                        npcCoordY : (880),
                animList: [
                    {
                        key: 'HSoloStandUp',
                        frames: { spriteName: 'HSoloStandUp', start: 0, end: 0 },
                        frameRate: 1,
                        repeat: -1
                    },
                    {
                        key: 'walkUpHSolo',
                        frames: { spriteName: 'HSoloMan', start: 4, end: 7 },
                        frameRate: 5,
                        repeat: -1
                    },
                    {
                        key: 'walkDownHSolo',
                        frames: { spriteName: 'HSoloMan', start: 8, end: 11 },
                        frameRate: 5,
                        repeat: -1
                    },
                    {
                        key: 'walkLeftHSolo',
                        frames: { spriteName: 'HSoloMan', start: 0, end: 3 },
                        frameRate: 5,
                        repeat: -1
                    },
                    {
                        key: 'walkRightHSolo',
                        frames: { spriteName: 'HSoloMan', start: 12, end: 15 },
                        frameRate: 5,
                        repeat: -1
                    }
                ]
            },
            {
                id: 3,
                isActive: true,
                objType: 'NPC',
                npcName: 'JokerPhone',
                defaultKey: 'HSoloStandUp',
                npcCoordX : (320),
                npcCoordY : (880),
                animList: [
                    {
                        key: 'HSoloStandUp',
                        frames: { spriteName: 'HSoloStandUp', start: 0, end: 0 },
                        frameRate: 1,
                        repeat: -1
                    },
                    {
                        key: 'takePhotoHSolo',
                        frames: { spriteName: 'HSoloManTypingPhoto', start: 4, end: 7 },
                        frameRate: 5,
                        repeat: -1
                    },
                    {
                        key: 'faceBackHSolo',
                        frames: { spriteName: 'HSoloManTypingPhoto', start: 8, end: 11 },
                        frameRate: 5,
                        repeat: -1
                    },
                    {
                        key: 'typingLeftHSolo',
                        frames: { spriteName: 'HSoloManTypingPhoto', start: 0, end: 3 },
                        frameRate: 5,
                        repeat: -1
                    },
                    {
                        key: 'typingRightHSolo',
                        frames: { spriteName: 'HSoloManTypingPhoto', start: 12, end: 15 },
                        frameRate: 5,
                        repeat: -1
                    }
                ]
            }
        ],
        animText: [
          {
            id: 0,
            npcId: 1,
            npcName: 'YellowDoc',
            txtLabel: 'EmplSpeech',
            txtStr: ' Employee: I need to find my patient data and \r\n    add some important information urgently...',
            txtTimeToShow: 5,
            moveVectorX: -1,
            posX: { minX: 310, maxX: 500 },
            posY: { minY: 440, maxY: 440 }
          },
          {
            id: 1,
            npcId: 1,
            npcName: 'YellowDoc',
            txtLabel: 'EmplSpeech',
            txtStr: ' Computer: Please enter your user name and password!',
            txtTimeToShow: 5,
            moveVectorX: 0,
            posX: { minX: 310, maxX: 500 },
            posY: { minY: 440, maxY: 440 }
          },
          {
            id: 2,
            npcId: 1,
            npcName: 'YellowDoc',
            txtLabel: 'CompScreenMsg1',
            txtStr: 'Computer: Patients records access allowed!',
            txtTimeToShow: 5,
            moveVectorX: 0,
            posX: { minX: 310, maxX: 500 },
            posY: { minY: 440, maxY: 440 }
          },
          {
            id: 3,
            npcId: 1,
            npcName: 'YellowDoc',
            txtLabel: 'CompScreenMsg',
            txtStr: ' Employee: Oh, its almost noon! \r\n   I need to go to the cafeteria now!',
            txtTimeToShow: 5,
            moveVectorX: 1,
            posX: { minX: 310, maxX: 600 },
            posY: { minY: 440, maxY: 440 }
          },
            {
                id: 4,
                npcId: 2,
                npcName: 'Joker',
                txtLabel: 'JokerMsg',
                txtStr: ' Hacker: Yes, I see something interesting \r\n   Gonna take a look now...',
                txtTimeToShow: 5,
                moveVectorX: -1,
                posX: { minX: 320, maxX: 320 },
                posY: { minY: 720, maxY: 880 }
            },
            {
                id: 5,
                npcId: 2,
                npcName: 'Joker',
                txtLabel: 'JokerMsg',
                txtStr: ' Hacker: Oh, great, let me try! \r\n   A piece of cake!',
                txtTimeToShow: 5,
                moveVectorX: 0,
                posX: { minX: 320, maxX: 320 },
                posY: { minY: 720, maxY: 880 }
            },
            {
                id: 6,
                npcId: 2,
                npcName: 'Joker',
                txtLabel: 'JokerMsg',
                txtStr: ' Hacker: Its time to leave... \r\n   Buy-bye my friends!',
                txtTimeToShow: 5,
                moveVectorX: 1,
                posX: { minX: 320, maxX: 320 },
                posY: { minY: 720, maxY: 880 }
            }
        ],
        animTextIndex: 0,
        animTextMaxIndex: 3
      }
    ];
    //==================== /==================== /====================
    // let deltaX = Math.floor(coordX * 400);  // let deltaY = Math.floor(coordY * 260);
    //==================== /==================== /====================

    for (let k=0; k< arrScenes.length; k++) {
      // going over an array: arrScenes
      var sceneAnimGrp = arrScenes[k].animNPCGroup;
      console.log("===> arrScenes Objects[",k,"]",arrScenes[k]);
      sceneTxtHolder.push(arrScenes[k].animText);

      // ************ ========== animNPCGroup start: ============ ************
      for (let i=0; i < sceneAnimGrp.length; i++) {
        //animNPCGroup - we loop over the group of sprites:
          var myObj = sceneAnimGrp[i];

          var npcId = myObj.id;
          var objActive = myObj.isActive;
          var objType = myObj.objType;
          var npcName = myObj.npcName;
          var npcDefaultKey = myObj.defaultKey;
          var sceneCoordX = myObj.npcCoordX;
          var sceneCoordY = myObj.npcCoordY;

          console.log("===> npcName (sceneAnimGrp[",i,"])",npcName);
          console.log("===> npcId (sceneAnimGrp[",i,"])",npcId);

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
          // use myObj.standFace to set standing posture:
          var myDude = npcGroup.create(sceneCoordX, sceneCoordY, npcDefaultKey).setScale(1); //doors keys (dude)
          myDude.npcDefaultKey = npcDefaultKey;
          console.log("myDude.npcDefaultKey: ", myDude.npcDefaultKey );
          //activate default animation:
          myDude.anims.play(npcDefaultKey, false);

          myDude.npcName = npcName;
          myDude.npcId = npcId;
          myDude.moveVector = -1;
          myDude.isActive = objActive;
          myDude.objType = objType;
          myDude.npcDefaultKey = npcDefaultKey;
          myDude.roomCoord = {
            x: Math.floor(sceneCoordX / 800) ,
            y: Math.floor(sceneCoordY / 520)
          } ;
          if (myDude.isActive) {
            myDude.animText = arrScenes[k].animText;
            myDude.animTextIndex = arrScenes[k].animTextIndex;
            myDude.animTextMaxIndex = arrScenes[k].animTextMaxIndex;
            console.log("myDude.npcId: ", myDude.npcId, " myDude.npcName: ", myDude.npcName  );
            console.log("myDude.animTextIndex: ", myDude.animTextIndex, " myDude.animTextMaxIndex: ", myDude.animTextMaxIndex  );
          }

      }
        // ************ ========== : animNPCGroup End ============ ************
    }
      var jsonAnim = scene.anims.toJSON(); //Export animation to JSON
      console.log("!!!! jsonAnim: ", jsonAnim );
  }



//======================    **************   ===========================

   
function dudeUpdate(player) {
  // Here we calculate which NPC to move and how to move
  // player.x and player.y - its a player coordinates
  let thisX = player.x;
  let thisY = player.y;
  let deltaX = Math.floor(thisX / 800);
  let deltaY = Math.floor(thisY / 520);
  npcGroup.children.iterate(child => {
    if (child.roomCoord.x === deltaX && child.roomCoord.y === deltaY) {

      if (child.isActive === true && child.npcId === 1) {
        //show on-screen text:
        var animIndex = child.animTextIndex;
        if (animIndex <= child.animTextMaxIndex) {
            var timeoutTxt = child.animText[animIndex].txtTimeToShow * 1000;
            if (timeoutTxt > 0 ) {

                var vectorX = child.animText[animIndex].moveVectorX;
                //$('#testBox span').text(vectorX);
                testBox.innerHTML = vectorX;
                if (vectorX == 1 ) {
                    if (child.x < child.animText[animIndex].posX.maxX) {
                        child.setVelocityX(100);
                        child.anims.play('walkRight', true);
                    } else {
                        child.setVelocityX(0);
                        child.anims.play(child.npcDefaultKey, true);
                    }
                }
                if (vectorX == -1)  {
                    if (child.x > child.animText[animIndex].posX.minX) {
                        child.setVelocityX(-100);
                        child.anims.play('walkLeft', true);
                    } else {
                        child.setVelocityX(0);
                        child.anims.play(child.npcDefaultKey, true);
                    }
                }
                if (vectorX == 0) {
                    child.setVelocityX(0);
                    child.anims.play(child.npcDefaultKey, true);
                }

                sceneText.setText(child.animText[animIndex].txtStr);
                sceneText.x = player.x - 380;
                sceneText.y = player.y + 200;
                setTimeout(myFunction => {
                    child.animText[animIndex].txtTimeToShow = 0;
                    //txtTimeToShow
                    //if (animIndex < child.animTextMaxIndex) {
                    child.animTextIndex = animIndex + 1;
                    //console.log("child.animTextIndex: ", child.animTextIndex); //animTextMaxIndex
                    sceneText.setText("");
                    //}
                }, timeoutTxt);
            }
        }

        // var timeoutTxt2 = child.animText[1].txtTimeToShow * 1000;
        // if (timeoutTxt == 0 && timeoutTxt2 > 0) {
        //   sceneText.setText(child.animText[1].txtStr);
        //   sceneText.x = player.x - 430;
        //   sceneText.y = player.y + 200;
        //   setTimeout(myFunction => {
        //     child.animText[1].txtTimeToShow = 0;
        //     sceneText.setText("");
        //   }, timeoutTxt2);
        // }
        //analyze NPC movements:
      }
    }
  })

  // player.mazeCoord = { mazeX: deltaX, mazeY: deltaY };
  // doorkeys.children.iterate(child => {
  //   if (child.roomCoord.x === deltaX && child.roomCoord.y === deltaY) {
  //     var vector = child.moveVector;
  //       if (vector === 1) {
  //         child.setVelocityX(100);
  //         child.anims.play('walkingDudeRight', true);
  //       }
  //       if (vector === -1)  {
  //         child.setVelocityX(-100);
  //         child.anims.play('walkingDudeLeft', true);
  //       }
  //
  //     //alert("Collision detected!");
  //     // console.log('--> dude state changes!');
  //   }
  //   // if (child && child.getBounds().contains(deltaX, deltaY)) {
  //   //   child.destroy(child, true);
  //   //   alert("Collision detected!");
  //   // }
  // })
};

// ===============================================================

  function npcHitTheWall(npc, wall) {
    // var initXY = npc.initCoord;
    // var npcX = npc.x;
    // var npcY  = npc.y;
    var defaultKey = npc.npcDefaultKey;
    //child.anims.play('marchingDude', true);
    if (npc.moveVector === -1 && (npc.isActive) ) {
      npc.anims.play(defaultKey, true);
      npc.setVelocityX(0);
      npc.moveVector = 1;
      npc.x += 5;
    } else if (npc.moveVector === 1 && (npc.isActive)) {
      npc.anims.play(defaultKey, true);
      npc.setVelocityX(0);
      npc.moveVector = -1;
      npc.x -= 5;
    }
      // npc.setX( initXY.x );
  }
  function npcHitOtherNpc(npc) {
    // var initXY = npc.initCoord;
    // var npcX = npc.x;
    // var npcY  = npc.y;
    //var defaultKey = npc.npcDefaultKey;
    //child.anims.play('marchingDude', true);
    /*
    if (npc.moveVector === -1 && (npc.isActive)) {
      npc.anims.play(defaultKey, true);
      npc.setVelocityX(0);
      npc.moveVector = 1;
      npc.x += 15;
    } else if (npc.moveVector === 1 && (npc.isActive)) {
      npc.anims.play(defaultKey, true);
      npc.setVelocityX(0);
      npc.moveVector = -1;
      npc.x -= 15;
    }
    */
  }






  function preload() {
    this.load.json('megaMAP', 'rest/getMap.php');

    //this.load.image('sky', 'assets/sky.png');
    this.load.audio('theme', [ 'assets/bgCut1.mp3'  ]);
    //baseRoomBack = RoomBG_red.png 1000 px X 650px
    // scale 0.8 we have: 800 x 520
    this.load.image('RoomBG_01', 'png/RoomBG_01_blue.png');
    this.load.image('RoomBG_02', 'png/RoomBG_02_yellow.png');
    this.load.image('RoomBG_03', 'png/RoomBG_03_red.png');
    this.load.image('RoomBG_04', 'png/RoomBG_04_green.png');
    this.load.image('RoomBG_05', 'png/RoomBG_05_orange.png');
    this.load.audio('soundStep', 'assets/walking0.mp3');

    this.load.audio('doorOpen', 'assets/doorOpen.mp3');
    this.load.audio('soundFail', 'assets/wrongAnswer.mp3');
    this.load.audio('pickupKey', 'assets/pickupKey.mp3');
    this.load.audio('soundOk', 'assets/okay.mp3');
    this.load.audio('soundFinal', 'assets/fanfareFinale.mp3');

    //this.load.image('baseRoomBack', 'png/RoomBG_red_withBG.png');
    this.load.image('finalRoom', 'png/RoomBG_01_final.png');
    // rooms assets section completed!
    this.load.image('hospitalBed', 'png/hospitalBed.png');
    //patientEmptyPlaceHolder.png
    this.load.image('patientEmptyPlaceHolder', 'png/patientEmptyPlaceHolder.png');
    //doors:
    this.load.spritesheet('doorU', 'png/doorUsprite.png', {frameWidth: 180, frameHeight: 180});
    this.load.spritesheet('doorD', 'png/doorDsprite.png', {frameWidth: 180, frameHeight: 180});
    this.load.spritesheet('doorL', 'png/doorLsprite.png', {frameWidth: 180, frameHeight: 180});
    this.load.spritesheet('doorR', 'png/doorRsprite.png', {frameWidth: 180, frameHeight: 180});
    //==============================================
    //blocks:
    //this.load.image('blockRed', 'png/block20x20red.png');
    this.load.image('blockRed', 'png/block20x20.png');
    //==================
    _this = this;
    this.load.image('gold-key', 'png/goldenKey.png'); //gold-key
    this.load.spritesheet('gold-key-sprite', 'png/gold-key.png', { frameWidth: 40, frameHeight: 40 });
    this.load.spritesheet('green-key-sprite', 'png/keyAnimation.png', { frameWidth: 40, frameHeight: 100 });
    this.load.image('messageBoard', 'png/messageBoard600x400.png');

    this.load.image('star', 'assets/star.png');
    //this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    //this.load.spritesheet('dude', 'png/docMUHCR4U1L4.png', {frameWidth: 50, frameHeight: 75});
    //docMUHC50x75L4U4D4R4
    this.load.spritesheet('docOther', 'png/docOther.png', {frameWidth: 50, frameHeight: 75}); //docOther.png
    this.load.spritesheet('HSoloMan', 'png/HSoloMan1_Sprite.png', {frameWidth: 50, frameHeight: 75}); //docOther.png
    this.load.spritesheet('HSoloManTypingPhoto', 'png/HSoloMan_TypingPhonePhoto.png', {frameWidth: 50, frameHeight: 75});
    this.load.spritesheet('dude', 'png/docMUHC50x75L4U4D4R4.png', {frameWidth: 50, frameHeight: 75});

    this.load.spritesheet('compDesk4x4', 'png/compDesk4x4v2Lock.png', {frameWidth: 75, frameHeight: 75});
    //yellowDocOne.png
    this.load.spritesheet('yellowDocOne', 'png/yellowDocOne.png', {frameWidth: 64, frameHeight: 72});
    //HSoloMan_SingleImg_Sprite
    this.load.spritesheet('HSoloSingleImg', 'png/HSoloMan_SingleImg_Sprite.png', {frameWidth: 64, frameHeight: 72});
    this.load.spritesheet('HSoloStandUp', 'png/HSoloMan_StandUp_Sprite.png', {frameWidth: 50, frameHeight: 75});

}

