window.ACTION_REMOVE_FROM_DIAGRAM = 
{
    "root": {
        "html": "ActionRemoveFromDiagram.html",
        "signature": "public void actionPerformed(ActionEvent)",
        "firstLine": "83",
        "lastLine": "88",
        "parents": null,
        "actualClass": null,
        "children": [{
            "callFrom": "83",
            "callee": {
                "html": "Globals.html",
                "signature": "public static Editor curEditor()",
                "firstLine": "409",
                "lastLine": "409",
                "parents": null,
                "actualClass": null,
                "children": null
            }
        }, {
            "callFrom": "85",
            "callee": {
                "html": "Editor.html",
                "signature": "public SelectionManager getSelectionManager()",
                "firstLine": "645",
                "lastLine": "645",
                "parents": null,
                "actualClass": null,
                "children": null
            }
        }, {
            "callFrom": "85",
            "callee": {
                "html": "SelectionManager.html",
                "signature": "public Vector<Fig> getFigs()",
                "firstLine": "360",
                "lastLine": "366",
                "parents": null,
                "actualClass": null,
                "children": [{
                    "callFrom": "363",
                    "callee": {
                        "html": "Selection.html",
                        "signature": "public Fig getContent()",
                        "firstLine": "84",
                        "lastLine": "84",
                        "parents": null,
                        "actualClass": "SelectionClass",
                        "children": null
                    }
                }]
            }
        }]
    }
}
