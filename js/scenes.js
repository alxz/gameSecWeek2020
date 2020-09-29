function getAllStories() {
    return [
        {
            storyId: 0,
            rmCoord: { x: 0, y: 1 }, //800:520
            nextScene: 0,
            lastScene: 8,
            questCoord: {x: 550, y: 350 },
            sceneList: [
                {
                    sceneId: 0,
                    spriteId: 0,
                    objType: 'DECORATION',
                    npcName: 'compDesk1',
                    animKey: 'compDeskLock',
                    moveTo: 'NO',
                    zIndex: 1,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 280, y: 200 },
                    endXY: { x: 280, y: 200 },
                    timeFrame: 1,
                    txtLabel: 'Computer',
                    txtStr: ' Computer: z-z-z...',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'compDeskLock'
                },
                {
                    sceneId: 1,
                    spriteId: 1,
                    objType: 'NPC',
                    npcName: 'YellowDoc',
                    animKey: 'walkLeft',
                    moveTo: 'LEFT',
                    zIndex: 10,
                    vectorXY: { x: -1, y: 0 },
                    startXY: { x: 650, y: 200 }, //{ x: 650, y: 720 }
                    endXY: { x: 320, y: 200 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: I need to find \r\n my patient data...',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'standFace'

                },
                {
                    sceneId: 2,
                    spriteId: 0,
                    objType: 'DECORATION',
                    npcName: 'compDesk1',
                    animKey: 'compDeskLock',
                    moveTo: 'NO',
                    zIndex: 1,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 280, y: 200 },
                    endXY: { x: 280, y: 200 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Computer: Please enter \r\n  your user name and password!',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'compDeskOpen'
                },
                {
                    sceneId: 3,
                    spriteId: 1,
                    objType: 'NPC',
                    npcName: 'YellowDoc',
                    animKey: 'walkLeft',
                    moveTo: 'NO',
                    zIndex: 10,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 320, y: 200 }, //{ x: 650, y: 720 }
                    endXY: { x: 320, y: 200 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: Sure, here it is! \r\n Adding some really important \r\n  patient data... Done!',
                    initRead: false,
                    removeSprite: true,
                    lastAnimKey: 'standFace'

                },
                {
                    sceneId: 4,
                    spriteId: 1,
                    objType: 'NPC',
                    npcName: 'YellowDoc',
                    animKey: 'walkRight',
                    moveTo: 'RIGHT',
                    zIndex: 10,
                    vectorXY: { x: 1, y: 0 },
                    startXY: { x: 320, y: 200 },
                    endXY: { x: 650, y: 200 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: Oh, its almost noon! \r\n  I need to go to \r\n  the cafeteria now!',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'standFace'
                },
                {
                    sceneId: 5,
                    spriteId: 1,
                    objType: 'NPC',
                    npcName: 'YellowDoc',
                    animKey: 'walkUp',
                    moveTo: 'DOWN',
                    zIndex: 1,
                    vectorXY: { x: 0, y: 1 },
                    startXY: { x: 650, y: 200 },
                    endXY: { x: 650, y: 330 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: I wil be back soon \r\n  .. in a 15 minutes',
                    initRead: false,
                    removeSprite: true,
                    lastAnimKey: 'standFace'
                },
                {
                    sceneId: 6,
                    spriteId: 2,
                    objType: 'NPC',
                    npcName: 'Joker',
                    animKey: 'walkDownHSolo',
                    moveTo: 'UP',
                    zIndex: 10,
                    vectorXY: { x: 0, y: -1 },
                    startXY: { x: 320, y: 330 },
                    endXY: { x: 320, y: 200 },
                    timeFrame: 5,
                    txtLabel: 'Joker',
                    txtStr: ' Joker: Yes! \r\n   Get to go!!!',
                    initRead: false,
                    removeSprite: true,
                    lastAnimKey: 'HSoloStandUp'
                },
                {
                    sceneId: 7,
                    spriteId: 3,
                    objType: 'NPC',
                    npcName: 'JokerPhone',
                    animKey: 'typingLeftHSolo',
                    moveTo: 'NO',
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 320, y: 200 },
                    endXY: { x: 320, y: 200 },
                    timeFrame: 5,
                    txtLabel: 'Joker',
                    txtStr: ' Joker: Welcome dear friend! \r\n Lets see what is there!!!',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'typingLeftHSolo'
                },
                {
                    sceneId: 8,
                    spriteId: 3,
                    objType: 'NPC',
                    npcName: 'JokerPhone',
                    animKey: 'HSoloPhotoLeft',
                    moveTo: 'NO',
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 320, y: 200 },
                    endXY: { x: 320, y: 200 },
                    timeFrame: 5,
                    txtLabel: 'Joker',
                    txtStr: ' Joker: I wil take here \r\n  some photos... \r\n  Thats it, cool!',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'HSoloStay'
                }
            ]
        },
        {
            storyId: 1,
            rmCoord: { x: 2, y: 0 },
            nextScene: 0,
            lastScene: 4,
            questCoord: {x: 550, y: 350 },
            sceneList: [
                {
                    sceneId: 0,
                    spriteId: 5,
                    objType: 'DECORATION',
                    npcName: 'cafeTableChairs',
                    animKey: 'cafeTableBrownWithChairs',
                    moveTo: 'NO',
                    zIndex: 1,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 500, y: 180 },
                    endXY: { x: 500, y: 150 },
                    timeFrame: 1,
                    txtLabel: 'cafeTable',
                    txtStr: '',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'cafeTableBrownWithChairs'
                },
                {
                    sceneId: 1,
                    spriteId: 4,
                    objType: 'DECORATION',
                    npcName: 'cafeTableFood',
                    animKey: 'cafeTableBrownWithChairFood',
                    moveTo: 'NO',
                    zIndex: 1,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 400, y: 250 },
                    endXY: { x: 400, y: 250 },
                    timeFrame: 1,
                    txtLabel: 'cafeTable',
                    txtStr: ' Somewhere in cafeteria...',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'cafeTableBrownWithChairFood'
                },
                {
                    sceneId: 2,
                    spriteId: 1,
                    objType: 'NPC',
                    npcName: 'YellowDoc',
                    animKey: 'walkLeft',
                    moveTo: 'LEFT',
                    zIndex: 10,
                    vectorXY: { x: -1, y: 0 },
                    startXY: { x: 650, y: 250 }, //{ x: 650, y: 720 }
                    endXY: { x: 440, y: 250 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: Drink some coffee  \r\n eat some snacks',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'standFace'

                },
                {
                    sceneId: 3,
                    spriteId: 6,
                    objType: 'NPC',
                    npcName: 'YellowDocTwo',
                    animKey: 'walkRight',
                    moveTo: 'RIGHT',
                    zIndex: 10,
                    vectorXY: { x: 1, y: 0 },
                    startXY: { x: 320, y: 250 },
                    endXY: { x: 370, y: 250 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: Hey dude! \r\n Wanna see something funny?!',
                    initRead: false,
                    removeSprite: true,
                    lastAnimKey: 'standFace'
                },
                {
                    sceneId: 4,
                    spriteId: 6,
                    objType: 'NPC',
                    npcName: 'YellowDocTwo',
                    animKey: 'stayRight',
                    moveTo: 'NO',
                    zIndex: 10,
                    vectorXY: { x: 1, y: 0 },
                    startXY: { x: 370, y: 250 },
                    endXY: { x: 370, y: 250 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: Look at this pictures! \r\n Just made them this morning!',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'stayRight'
                }

            ]
        },
        {
            storyId: 2,
            rmCoord: { x: 0, y: 2 },
            nextScene: 0,
            lastScene: 5,
            questCoord: {x: 550, y: 350 },
            sceneList: [
                {
                    sceneId: 0,
                    spriteId: 5,
                    objType: 'DECORATION',
                    npcName: 'cafeTableChairs',
                    animKey: 'cafeTableBrownWithChairs',
                    moveTo: 'NO',
                    zIndex: 1,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 500, y: 180 },
                    endXY: { x: 400, y: 250 },
                    timeFrame: 1,
                    txtLabel: 'cafeTable',
                    txtStr: ' Somewhere in cafeteria...',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'cafeTableBrownWithChairs'
                },
                {
                    sceneId: 1,
                    spriteId: 4,
                    objType: 'DECORATION',
                    npcName: 'cafeTableFood',
                    animKey: 'cafeTableBrownWithChairFood',
                    moveTo: 'NO',
                    zIndex: 1,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 400, y: 250 },
                    endXY: { x: 400, y: 250 },
                    timeFrame: 1,
                    txtLabel: 'cafeTable',
                    txtStr: ' Somewhere in cafeteria...',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'cafeTableBrownWithChairFood'
                },
                {
                    sceneId: 2,
                    spriteId: 6,
                    objType: 'NPC',
                    npcName: 'YellowDocTwo',
                    animKey: 'walkLeft',
                    moveTo: 'LEFT',
                    zIndex: 10,
                    vectorXY: { x: -1, y: 0 },
                    startXY: { x: 650, y: 250 }, //{ x: 650, y: 720 }
                    endXY: { x: 440, y: 250 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: Drink some coffee  \r\n eat some snacks',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'standFace'

                },
                {
                    sceneId: 3,
                    spriteId: 6,
                    objType: 'NPC',
                    npcName: 'YellowDocTwo',
                    animKey: 'standFace',
                    moveTo: 'NO',
                    zIndex: 10,
                    vectorXY: { x: -1, y: 0 },
                    startXY: { x: 440, y: 250 }, //{ x: 650, y: 720 }
                    endXY: { x: 440, y: 250 },
                    timeFrame: 1,
                    txtLabel: 'EmplSpeech',
                    txtStr: '',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'standFace'

                },
                {
                    sceneId: 4,
                    spriteId: 7,
                    objType: 'NPC',
                    npcName: 'DocWalk4w',
                    animKey: 'walkRight',
                    moveTo: 'RIGHT',
                    zIndex: 10,
                    vectorXY: { x: 1, y: 0 },
                    startXY: { x: 320, y: 250 },
                    endXY: { x: 370, y: 250 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: Hey dude! \r\n Wanna see something funny?!',
                    initRead: false,
                    removeSprite: true,
                    lastAnimKey: 'faceUp'
                },
                {
                    sceneId: 5,
                    spriteId: 7,
                    objType: 'NPC',
                    npcName: 'DocWalk4w',
                    animKey: 'stayRight',
                    moveTo: 'NO',
                    zIndex: 10,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 370, y: 250 },
                    endXY: { x: 370, y: 250 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: Look at this pictures! \r\n Just made them this morning!',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'stayRight'
                }
            ]
        },
        {
            storyId: 3,
            rmCoord: { x: 1, y: 0 },
            nextScene: 0,
            lastScene: 8,
            questCoord: { x: 500, y: 350 },
            decorXY: { x: 400, y: 200} ,
            sceneList: [
                {
                    sceneId: 0,
                    spriteId: 10,
                    objType: 'DECORATION',
                    npcName: 'compDeskScrBlank',
                    animKey: 'compScrBlank',
                    moveTo: 'NO',
                    zIndex: 0,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 400, y: 200 },
                    endXY: { x: 400, y: 200 },
                    timeFrame: 0,
                    txtLabel: 'compScrBlank',
                    txtStr: '',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'compScrBlank'
                },
                {
                    sceneId: 1,
                    spriteId: 7,
                    objType: 'NPC',
                    npcName: 'DocWalk4w',
                    animKey: 'walkLeft',
                    moveTo: 'LEFT',
                    zIndex: 10,
                    vectorXY: { x: -1, y: 0 },
                    startXY: { x: 540, y: 350 }, //{ x: 650, y: 720 }
                    endXY: { x: 370, y: 350 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: Its time to check me email \r\n Need to run MS Outlook application',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'walkLeft'

                },
                {
                    sceneId: 2,
                    spriteId: 7,
                    objType: 'NPC',
                    npcName: 'DocWalk4w',
                    animKey: 'walkUp',
                    moveTo: 'UP',
                    zIndex: 10,
                    vectorXY: { x: 0, y: -1 },
                    startXY: { x: 370, y: 350 }, //{ x: 650, y: 720 }
                    endXY: { x: 370, y: 250 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: I\'m expecting some important today \r\n lets see',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'faceBack'
                },
                {
                    sceneId: 3,
                    spriteId: 9,
                    objType: 'DECORATION',
                    npcName: 'compScreen6pcs',
                    animKey: 'compScrLoading',
                    moveTo: 'NO',
                    zIndex: 1,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 400, y: 180 },
                    endXY: { x: 400, y: 180 },
                    timeFrame: 5,
                    txtLabel: 'compScreenOpen',
                    txtStr: ' Computer: A new message has arrived!',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'compScrLoading'
                },
                {
                    sceneId: 4,
                    spriteId: 9,
                    objType: 'DECORATION',
                    npcName: 'compScreen6pcs',
                    animKey: 'compScrImportntMsg',
                    moveTo: 'NO',
                    zIndex: 1,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 400, y: 180 },
                    endXY: { x: 400, y: 180 },
                    timeFrame: 5,
                    txtLabel: 'compScreenOpen',
                    txtStr: ' Computer: From HelpDesk - must be important!',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'compScrImportntMsg'
                },
                {
                    sceneId: 5,
                    spriteId: 7,
                    objType: 'NPC',
                    npcName: 'DocWalk4w',
                    animKey: 'faceBack',
                    moveTo: 'NO',
                    zIndex: 10,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 370, y: 250 }, //{ x: 650, y: 720 }
                    endXY: { x: 370, y: 250 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: 'Employee: Oh, whats that? \n\r Must be important, must open it',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'faceBack'

                },
                {
                    sceneId: 6,
                    spriteId: 9,
                    objType: 'DECORATION',
                    npcName: 'compScreen6pcs',
                    animKey: 'compScrLoadingUserPw',
                    moveTo: 'NO',
                    zIndex: 1,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 400, y: 180 },
                    endXY: { x: 400, y: 180 },
                    timeFrame: 5,
                    txtLabel: 'compScrLoadingUserPw',
                    txtStr: ' Computer: Please login: \r\n your user name and password required',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'compScrLoadingUserPw'
                },
                {
                    sceneId: 7,
                    spriteId: 9,
                    objType: 'DECORATION',
                    npcName: 'compScreen6pcs',
                    animKey: 'compScreenFinal',
                    moveTo: 'NO',
                    zIndex: 5,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 400, y: 180 },
                    endXY: { x: 400, y: 180 },
                    timeFrame: 1,
                    txtLabel: 'compScreenPassword',
                    txtStr: ' Computer: Accepted! \r\n  Completed!',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'compScreenFinal'
                },
                {
                    sceneId: 8,
                    spriteId: 7,
                    objType: 'NPC',
                    npcName: 'DocWalk4w',
                    animKey: 'faceUp',
                    moveTo: 'NO',
                    zIndex: 10,
                    vectorXY: { x: 0, y: 0 },
                    startXY: { x: 370, y: 250 },
                    endXY: { x: 370, y: 250 },
                    timeFrame: 5,
                    txtLabel: 'EmplSpeech',
                    txtStr: ' Employee: Oops! \r\n What was that!?!',
                    initRead: false,
                    removeSprite: false,
                    lastAnimKey: 'faceUp'
                }
            ]
        }
    ]
}

function getSceneSprites(coordX, coordY) {
    return [
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
                    defaultKey: 'compDeskLock',
                    npcCoordX : (280),
                    npcCoordY : (720),
                    zIndex: 0,
                    animList: [
                        {
                            key: 'compDeskOpen',
                            frames: { spriteName: 'compDesk4x4', start: 0, end: 3 },
                            frameRate: 5,
                            repeat: 10
                        },
                        {
                            key: 'compDeskLock',
                            frames: { spriteName: 'compDesk4x4', start: 4, end: 7 },
                            frameRate: 5,
                            repeat: 10
                        }
                    ]
                },
                {
                    id: 1,
                    isActive: true,
                    objType: 'NPC',
                    npcName: 'YellowDoc',
                    defaultKey: 'standFace',
                    npcCoordX : (650),
                    npcCoordY : (720),
                    zIndex: 10,
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
                    zIndex: 10,
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
                    defaultKey: 'HSoloStay',
                    npcCoordX : (320),
                    npcCoordY : (880),
                    zIndex: 10,
                    animList: [
                        {
                            key: 'HSoloStay',
                            frames: { spriteName: 'HSoloManTypingPhoto', start: 5, end: 5 },
                            frameRate: 1,
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
                        },
                        {
                            key: 'HSoloPhotoLeft',
                            frames: { spriteName: 'HSoloManTypingPhoto', start: 4, end: 7 },
                            frameRate: 5,
                            repeat: -1
                        },
                        {
                            key: 'HSoloPhotoRight',
                            frames: { spriteName: 'HSoloManTypingPhoto', start: 4, end: 7 },
                            frameRate: 5,
                            repeat: -1
                        }
                    ]
                },
                {
                    id: 4,
                    isActive: false,
                    objType: 'DECORATION',
                    npcName: 'cafeTableFood',
                    defaultKey: 'cafeTableBrownWithChairFood',
                    npcCoordX : (650),
                    npcCoordY : (860),
                    zIndex: 0,
                    animList: [
                        {
                            key: 'cafeTableBrownEmpty',
                            frames: { spriteName: 'cafeTableBrown', start: 0, end: 0 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'cafeTableBrownWithChairs',
                            frames: { spriteName: 'cafeTableBrown', start: 1, end: 1 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'cafeTableBrownWithChairFood',
                            frames: { spriteName: 'cafeTableBrown', start: 2, end: 2 },
                            frameRate: 5,
                            repeat: 1
                        }
                    ]
                },
                {
                    id: 5,
                    isActive: false,
                    objType: 'DECORATION',
                    npcName: 'cafeTableChairs',
                    defaultKey: 'cafeTableBrownWithChairs',
                    npcCoordX : (100),
                    npcCoordY : (100),
                    zIndex: 0,
                    animList: [
                        {
                            key: 'cafeTableBrownEmpty',
                            frames: { spriteName: 'cafeTableBrown', start: 0, end: 0 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'cafeTableBrownWithChairs',
                            frames: { spriteName: 'cafeTableBrown', start: 1, end: 1 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'cafeTableBrownWithChairFood',
                            frames: { spriteName: 'cafeTableBrown', start: 2, end: 2 },
                            frameRate: 5,
                            repeat: 1
                        }
                    ]
                },
                {
                    id: 6,
                    isActive: true,
                    objType: 'NPC',
                    npcName: 'YellowDocTwo',
                    defaultKey: 'standFace',
                    npcCoordX : (650),
                    npcCoordY : (720),
                    zIndex: 10,
                    animList: [
                        {
                            key: 'standFace',
                            frames: { spriteName: 'yellowDocOne', start: 0, end: 0 },
                            frameRate: 1,
                            repeat: 1
                        },
                        {
                            key: 'stayUp',
                            frames: { spriteName: 'docOther', start: 4, end: 4 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'stayDown',
                            frames: { spriteName: 'docOther', start: 8, end: 8 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'stayLeft',
                            frames: { spriteName: 'docOther', start: 0, end: 0 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'stayRight',
                            frames: { spriteName: 'docOther', start: 12, end: 12 },
                            frameRate: 5,
                            repeat: 1
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
                    id: 7,
                    isActive: true,
                    objType: 'NPC',
                    npcName: 'DocWalk4w',
                    defaultKey: 'faceUp',
                    npcCoordX : (650),
                    npcCoordY : (320),
                    zIndex: 10,
                    animList: [
                        {
                            key: 'faceUp',
                            frames: { spriteName: 'docWalk4w', start: 4, end: 4 },
                            frameRate: 1,
                            repeat: 1
                        },
                        {
                            key: 'faceBack',
                            frames: { spriteName: 'docWalk4w', start: 8, end: 8 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'stayLeft',
                            frames: { spriteName: 'docWalk4w', start: 2, end: 2 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'stayRight',
                            frames: { spriteName: 'docWalk4w', start: 13, end: 13 },
                            frameRate: 5,
                            repeat: 0
                        },
                        {
                            key: 'walkUp',
                            frames: { spriteName: 'docWalk4w', start: 8, end: 11 },
                            frameRate: 5,
                            repeat: -1
                        },
                        {
                            key: 'walkDown',
                            frames: { spriteName: 'docWalk4w', start: 4, end: 7 },
                            frameRate: 5,
                            repeat: -1
                        },
                        {
                            key: 'walkLeft',
                            frames: { spriteName: 'docWalk4w', start: 0, end: 3 },
                            frameRate: 5,
                            repeat: -1
                        },
                        {
                            key: 'walkRight',
                            frames: { spriteName: 'docWalk4w', start: 12, end: 15 },
                            frameRate: 5,
                            repeat: -1
                        }
                    ]
                },
                {
                    id: 8,
                    isActive: false,
                    objType: 'DECORATION',
                    npcName: 'compDesk2',
                    defaultKey: 'compDeskLock',
                    npcCoordX : (480),
                    npcCoordY : (720),
                    zIndex: 1,
                    animList: [
                        {
                            key: 'compDeskOpen',
                            frames: { spriteName: 'compDesk4x4', start: 0, end: 3 },
                            frameRate: 5,
                            repeat: 10
                        },
                        {
                            key: 'compDeskLock',
                            frames: { spriteName: 'compDesk4x4', start: 4, end: 7 },
                            frameRate: 5,
                            repeat: 10
                        }
                    ]
                },
                {
                    id: 9,
                    isActive: false,
                    objType: 'DECORATION',
                    npcName: 'compScreen6pcs',
                    defaultKey: 'compScrLoading',
                    npcCoordX : (480),
                    npcCoordY : (720),
                    zIndex: 0,
                    animList: [
                        {
                            key: 'compScrLoading',
                            frames: { spriteName: 'ComputerScreenSet6', start: 0, end: 0 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'compScrImportntMsg',
                            frames: { spriteName: 'ComputerScreenSet6', start: 1, end: 1 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'compScrLoadingHDeskMsg',
                            frames: { spriteName: 'ComputerScreenSet6', start: 2, end: 2 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'compScrLoadingUserPw',
                            frames: { spriteName: 'ComputerScreenSet6', start: 3, end: 4 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'compScreenFinal',
                            frames: { spriteName: 'ComputerScreenSet6', start: 5, end: 5 },
                            frameRate: 5,
                            repeat: 0
                        }
                    ]
                },
                {
                    id: 10,
                    isActive: false,
                    objType: 'DECORATION',
                    npcName: 'compDeskScrBlank',
                    defaultKey: 'compScrBlank',
                    npcCoordX : (480),
                    npcCoordY : (720),
                    zIndex: 0,
                    animList: [
                        {
                            key: 'compScrGrey',
                            frames: { spriteName: 'compDeskScrBlank', start: 1, end: 1 },
                            frameRate: 5,
                            repeat: 1
                        },
                        {
                            key: 'compScrBlank',
                            frames: { spriteName: 'compDeskScrBlank', start: 0, end: 0 },
                            frameRate: 5,
                            repeat: 1
                        }
                    ]
                }
            ],
            animTextIndex: 0,
            animTextMaxIndex: 3
        }
    ]
}