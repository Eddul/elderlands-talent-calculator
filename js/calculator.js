var Calculator = (function () {
    'use strict';

    var MAX_POINTS      = 50;
    var MAX_PER_TALENT  = 5;
    var ITEMS_PER_ROW   = 3;
    var ICON_SIZE       = 32;
    var TREE_OFFSET     = 240;

    var _clazz;
    var _classes;
    var _talents;
    var _state;
    var _points;
    var _spriteOffsets;

    var $calculator;

    var _states = [
        "unavailable", "available", "active", "full"
    ];

    var _types = [
        "passive", "spell"
    ];

    var _treeNames = [
        ["Defender", "Berserker", "Warmonger"],
        ["Pyromancer", "Frost Mage", "Strombringer"],
        ["Divine Healer", "Holy Priest", "Vassal"]
    ];

    // main
    var init = function () {
        $calculator = $("#calculator");
        
        _points   = 0;
        _state    = [{}, {}, {}];
        _clazz    = 0; // warrior
        _classes  = [warrior, mage, priest];

        updateData();

        if (window.location.hash)
            loadFromHash();

        draw();
        updateTalents();
    };

    /* CALCULATOR GRAPHICS */
    var draw = function () {
        for (var tree = 0; tree < 3; tree++) {
            drawMenuButton(tree);
            drawTreeBackground(tree);
            drawTreeTitle(tree);

            _talents[tree].forEach(function (value, index) {
                drawTalent(tree, index);
            });
        }

        createTooltip();

        $calculator
            .append(
                $("<div>")
                .attr("id", "points")
                .text("0/" + MAX_POINTS)
            ).append(
                $("<div>")
                .attr("id", "reset-button")
                .mousedown(function () {
                    if (event.which === 1)
                        resetPoints();
                })
            );
    };

    // draw the class menu button
    var drawMenuButton = function (clazz) {
        var pos = -clazz * TREE_OFFSET + "px 0px";

        if (clazz === _clazz) {
            $("#highlight").css({
                left: clazz * (TREE_OFFSET + 1),
            });
        }

        $("#class-menu").append(
            $("<div>")
            .addClass("clazz")
            .css({
                left: clazz * (TREE_OFFSET + 1),
                backgroundPosition: pos,
            })
            .mousedown(function () {
                switch (event.which) {
                case 1:
                    changeClass(clazz);
                    break;
                }
            })
        );
    };

    var drawTreeBackground = function (tree) {
        var left = 12 + tree * (TREE_OFFSET + 1);

        $calculator.append(
            $("<div>")
            .addClass("tree")
            .css({
                left: left,
            })
        );
    };

    var drawTreeTitle = function (tree) {
        var left    = 17 + tree * TREE_OFFSET + 1 * tree;
        var width   = -_clazz * 230;
        var height  = -tree * 25;

        $calculator.append(
            $("<div>")
            .addClass("tree-title")
            .css({
                left: left,
                backgroundPosition: width + " " + height,
            })
        );
    };

    var drawTalent = function (tree, index) {
        var talent    = _talents[tree][index];
        var status    = talent.index <= ITEMS_PER_ROW ? "available" : "unavailable";
        var rank      = 0;
        var talentPos = talentPosition(tree, index);
        var spritePos = {
            x: -_clazz * ICON_SIZE,
            y: -(_spriteOffsets[tree] + index) * ICON_SIZE
        };

        var parentLink = null;
        if (talent.parent != undefined) {
            var parentPos = talentPosition(tree, getParentIndex(tree, talent.parent));
            var height = (talentPos.y - parentPos.y) - ICON_SIZE;
            $calculator
                .append(parentLink =
                    $("<div>")
                    .addClass("arrow")
                    .addClass("unavailable")
                    .css({
                        left: parentPos.x + (ICON_SIZE / 3),
                        top: parentPos.y + ICON_SIZE,
                        height: height,
                        backgroundPosition: "0 " + (height - 300),
                    })
            );
        }

        $calculator
            .contextmenu(function (event) {
                event.preventDefault()
            })
            .append(
                $("<div>")
                .addClass("talent")
                .addClass(status)
                .css({
                    left: talentPos.x + "px",
                    top: talentPos.y + "px",
                    backgroundPosition: spritePos.x + " " + spritePos.y,
                })
                .append(
                    $("<div>")
                    .addClass("counter")
                    .text("0/" + talent.ranks)
                )
                .mouseover(function () {
                    updateTooltip(_talents[tree][index], rank, status, _treeNames[_clazz][tree]);
                    $(this).data("hover", true);
                    $("#tooltip").show();
                })
                .mouseout(function () {
                    $(this).data("hover", false);
                    $("#tooltip").hide();
                })
                .mousedown(function () {
                    switch (event.which) {
                    case 1:
                        // left click
                        setState(tree, index, rank, 1);
                        break;
                    case 3:
                        // right click
                        setState(tree, index, rank, -1);
                        break;
                    }
                })
                .data("update", function () {
                    rank = _state[tree][index] || 0;
                    if (rank === talent.ranks) {
                        status = "full";
                    } else {
                        if (pointsRequired(talent) <= treePoints(tree) && parentIsFull(tree, index))
                            status = (rank > 0) ? "active" : "available";
                        else
                            status = "unavailable";
                    }

                    // change talent status
                    if (!$(this).hasClass(status)) {
                        $(this)
                            .removeClass(_states.join(" "))
                            .addClass(status)
                            .css({
                                backgroundPosition: spritePos.x + " " + spritePos.y,
                            });
                    }

                    // talent counter
                    $(this).find(".counter").text(rank + "/" + talent.ranks);

                    // total points
                    $("#points").text(_points + "/" + MAX_POINTS);

                    // arrow
                    if (parentLink) {
                        parentLink.removeClass(_states.join(" "))
                        parentLink.addClass(status);
                    }

                    // redraw tooltip
                    if ($(this).data("hover"))
                        $(this).mouseover();
                })
        );
    };

    function createTooltip() {
        $calculator
            .contextmenu(function (event) {
                event.preventDefault()
            })
            .append(
                $("<div>") // main div
                .attr('id', "tooltip")
                .append($("<div>") // top div
                    .addClass("tooltip-top")
                    .append($("<div>")
                        .addClass("tooltip-type")
                    )
                    .append($("<div>")
                        .addClass("tooltip-name")
                    )
                )
                .append($("<div>") // divider
                    .addClass("tooltip-divider")
                )
                .append($("<div>") // bottom div
                    .addClass("tooltip-bottom")
                    .append($("<div>")
                        .addClass("tooltip-rank")
                    )
                    .append($("<div>")
                        .addClass("tooltip-desc")
                    )
                    .append($("<div>")
                        .addClass("tooltip-next")
                        .text("Next level:")
                    )
                    .append($("<div>")
                        .addClass("tooltip-next-desc")
                    )
                    .append($("<div>")
                        .addClass("tooltip-status")
                    )
                )
        );

        // update coordinates for tooltip
        var $tooltip = $("#tooltip");
        $(window).mousemove(function (e) {
            if ($tooltip.is(":visible")) {
                // offset from pointer
                var x = 10;
                var y = 20;

                // x-coordinate
                if (!e.pageX)
                    x += e.clientX;
                else
                    x += event.pageX - ($("body").scrollLeft() || $("documentElement").scrollLeft());

                // y-coordinate
                if (e.pageY)
                    y += event.pageY - ($("body").scrollTop() || $("documentElement").scrollTop());
                else
                    y += e.clientY

                $tooltip.css({
                    "top": y,
                    "left": x,
                });
            }
        });
    };

    var updateTooltip = function (talent, rank, status, treeName) {
        var $tooltip = $("#tooltip");

        // type
        var $type = $tooltip.find(".tooltip-type").removeClass(_types.join(" "));
        $type.addClass(talent.type);
        $type.text(Util.toFirstUpper(talent.type) + ":");

        // name
        $tooltip.find(".tooltip-name").text(talent.name);

        // rank
        $tooltip.find(".tooltip-rank").text("Rank: " + rank + "/" + talent.ranks);

        // status text
        var statusText;
        if (status === "unavailable")
            statusText = "Requires " + pointsRequired(talent) + " points in  " + treeName + ".";
        else if (rank === talent.ranks)
            statusText = "Right-click to unlearn.";
        else
            statusText = "Click to learn.";

        var $status = $tooltip.find(".tooltip-status");
        if (status === "unavailable" || status === "full")
            $status.addClass("missing");
        else
            $status.removeClass("missing");

        $status.text(statusText);

        //rank: [2, 4, 6, 8, 10]
        //index: 0  1  2  3  4
        var currIndex = (rank === 0) ? 0 : rank - 1;
        var nextIndex = currIndex + 1;
        var showNext = (0 < rank && nextIndex < talent.ranks) ? true : false;

        // description
        var desc = talent.desc;
        var next = desc;
        if (talent.primary[0]) {
            desc = Util.insertValue(desc, desc.indexOf("#"), talent.primary[currIndex])
            next = Util.insertValue(next, next.indexOf("#"), talent.primary[nextIndex])
        }

        if ("secondary" in talent) {
            desc = Util.insertValue(desc, desc.indexOf("#"), talent.primary[currIndex])
            next = Util.insertValue(next, next.indexOf("#"), talent.primary[nextIndex])
        }

        $tooltip.find(".tooltip-desc").text(desc);

        if (showNext) {
            $tooltip.find(".tooltip-next").show();
            $tooltip.find(".tooltip-next-desc").show().text(next);
        } else {
            $tooltip.find(".tooltip-next").hide();
            $tooltip.find(".tooltip-next-desc").hide();
        }
    };

    var updateTalents = function () {
        $(".talent").each(function () {
            $(this).data("update").call(this, 0);
        });
    };

    /* CALCULATOR LOGIC */
    var talentPosition = function (tree, index) {
        var i   = _talents[tree][index].index - 1;
        var ix  = i % ITEMS_PER_ROW;
        var iy  = Math.floor(i / ITEMS_PER_ROW);

        // padding between talents
        var dx = 33.5;
        var dy = 20;

        // default padding
        var leftPadding = 17;
        var topPadding  = 49;

        var x = leftPadding + ix * (ICON_SIZE + dx) + dx + (TREE_OFFSET * tree);
        var y = topPadding + iy * (ICON_SIZE + dy);

        return {
            x: x,
            y: y
        };
    };

    var getParentIndex = function (tree, parent) {
        for (var i = 0; i < _talents[tree].length; i++) {
            if (_talents[tree][i].index == parent) {
                return i;
            }
        }
    };


    var setState = function (tree, index, rank, modifier) {
        var talent = _talents[tree][index];
        var newRank = rank + modifier;

        // min / max level
        if (newRank < 0 || newRank > talent.ranks)
            return;

        // addition
        if (modifier > 0) {
            if (_points + modifier > MAX_POINTS)
                return;

            if (pointsRequired(talent) > treePoints(tree) - rank)
                return

            if (!parentIsFull(tree, index))
                return;
        }

        // subtraction
        if (modifier < 0) {
            for (var i in _state[tree]) {
                // talent has active child
                if (i > index && _state[tree][i] > 0) {
                    if (getParentIndex(tree, _talents[tree][i].parent) === index)
                        return;
                }

                // higher tier talent has enough points
                if (getTalentTier(tree, i) > getTalentTier(tree, index) && !hasEnoughPoints(tree, i))
                    return;

            }
        }
        // updating state
        _state[tree][index] = newRank;
        _points += modifier;
        updateTalents();
        updateHash();
    };

    var pointsRequired = function (talent) {
        return Math.floor((talent.index - 1) / ITEMS_PER_ROW) * 5;
    };

    var treePoints = function (tree) {
        var points = 0;
        for (var i in _state[tree])
            points += _state[tree][i];
        return points;
    };

    var parentIsFull = function (tree, index) {
        var parent = getParentIndex(tree, _talents[tree][index].parent);
        if (parent && (_state[tree][parent] !== _talents[tree][parent].ranks))
            return false;
        return true;
    };

    var getTalentTier = function (tree, index) {
        return Math.floor((_talents[tree][index].index - 1) / ITEMS_PER_ROW);
    };

    var hasEnoughPoints = function(tree, index) {
        var points = 0;
        for (var i in _state[tree]) {
            if (getTalentTier(tree, i) < getTalentTier(tree, index)) {
                points += _state[tree][i] || 0;
            }
        }
        if (_state[tree][index] > 0 && points - 1 < pointsRequired(_talents[tree][index])) {
            return false;
        }
        return true;
    };

    var setClass = function (cls) {
        _clazz = cls;
    };

    var changeClass = function (cls) {
        // clear existing calculator
        $("#class-menu").empty();
        $calculator.empty();
        resetPoints();

        // update
        setClass(cls);
        updateData();
        updateHash();

        // redraw
        draw();
    };

    var updateData = function () {
        _talents = _classes[_clazz];
        _spriteOffsets = [
            0,
            _talents[0].length,
            _talents[0].length + _talents[0].length
        ];
    };

    var resetPoints = function () {
        _points = 0;
        _state  = [{}, {}, {}];
        updateTalents();
        updateHash();
    };

    /* LOADING / "STORING" */
    var updateHash = function () {
        var hash = "";
        for (var tree = 0; tree < 3; tree++) {
            var tmp = "";
            for (var talent = 0; talent < _talents[tree].length; talent++) {
                if (_state[tree][talent] === undefined)
                    tmp += (talent === 0 ? 6 : 0); // first 6 is a equal to 0
                else
                    tmp += _state[tree][talent];
            }

            // remove trailing zeroes
            while (tmp.slice(-1) === "0")
                tmp = tmp.substring(0, tmp.length - 1);

            // split to handle big number conversion
            if (tmp.length > 15) {
                hash += Util.encode(tmp.substring(0, 15)) + "&";
                hash += Util.encode(tmp.substring(15, tmp.length));
            } else {
                hash += Util.encode(tmp);
            }
            hash += ":"
        }
        hash += Util.encode(_clazz);
        window.location.hash = hash;
    };

    var loadFromHash = function () {
        try {
            var trees = window.location.hash.substr(1).split(":");
            setClass(parseInt(Util.decode(trees.pop())));

            for (var tree = 0; tree < trees.length; tree++) {
                var subTree = trees[tree].split("&");
                var data = "";

                data += Util.decode(subTree[0]);

                if (subTree.length > 1)
                    data += Util.decode(subTree[1]);

                for (var i = 0; i < data.length; i++) {
                    var val = parseInt(data[i]);
                    val = (val === 6 ? 0 : val);
                    _state[tree][i] = val;
                    _points += val;
                }
                updateData();
            }
        } catch (error) {
            console.log("Unable to load from hash. Invalid input.");
            resetPoints();
        }
    };

    // public
    return {
        init: function () {
            init();
        }
    };

})();
