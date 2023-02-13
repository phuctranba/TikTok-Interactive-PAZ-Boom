oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oSplitPea, oJalapeno, oSpikeweed, oRepeater, oTallNut, oPumpkinHead, oSquash, oFlowerPot, oTorchwood, oThreepeater, oGatlingPea, oTwinSunflower, oSpikerock, oFumeShroom, oCoffeeBean, oGloomShroom, oSunShroom, oPuffShroom, oScaredyShroom, oGarlic],
    ZName: [oZombie, oConeheadZombie, oPoleVaultingZombie, oBucketheadZombie],
    PicArr: ["images/interface/background1.jpg"],
    backgroundImage: "images/interface/background1.jpg",
    CanSelectCard: 1,
    LevelName: "Zombie!",
    LvlClearFunc: function () {
        oSym.TimeStep = 10
    },
    LargeWaveFlag: {10: $("imgFlag3"), 20: $("imgFlag1")},
    LoadMusic: function () {
        NewEle("oEmbed", "embed", "width:0;height:0", {src: "music/Look up at the.mp3"}, EDAll)
    },
    StartGame: function () {
        ClearChild($("oEmbed"));
        NewEle("oEmbed", "embed", "width:0;height:0", {src: "music/Watery Graves.mp3"}, EDAll);
        SetVisible($("tdShovel"), $("dFlagMeter"));
        oS.InitLawnMower();
        PrepareGrowPlants(function () {
            oP.Monitor({
                ar: [], f: function () {
                    oSym.TimeStep = 2
                }
            });
            BeginCool();
            AutoProduceSun(25);
            oSym.addTask(1500, function () {
                oP.AddZombiesFlag();
                SetVisible($("dFlagMeterContent"))
            }, [])
        })
    }
}, {
    ArZ: [oZombie, oZombie, oConeheadZombie, oConeheadZombie, oConeheadZombie, oConeheadZombie, oConeheadZombie, oPoleVaultingZombie, oPoleVaultingZombie, oPoleVaultingZombie, oPoleVaultingZombie, oBucketheadZombie, oBucketheadZombie, oBucketheadZombie, oBucketheadZombie],
    FlagNum: 20,
    SumToZombie: {1: 2, 2: 11, 3: 15, "default": 15},
    FlagToSumNum: {a1: [3, 5, 9, 10, 13, 15, 19], a2: [1, 3, 5, 20, 10, 15, 20, 30]},
    FlagToMonitor: {9: [ShowLargeWave, 0], 19: [ShowFinalWave, 0]}
});