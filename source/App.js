enyo.kind({
	name: "App",
	fit: true,
	components:[
        {kind:"FittableRows",classes: "fittable-sample-box fittable-sample-mtb fittable-sample-o",components: [
            {classes: "onyx-sample-divider", content: "Button Group"},
            {kind: "Group", onActivate:"buttonActivated", classes: "onyx-sample-tools group",defaultKind: "onyx.Button", highlander: true, ontap: "buttonGroupTap", components: [
                {content: "Button A", active: true, classes: "onyx-affirmative"},
                {content: "Button B", classes: "onyx-negative"},
                {content: "Button C", classes: "onyx-blue"}
            ]},
            {tag: "br"},
            {classes: "onyx-sample-divider", content: "Checkboxes"},
            {classes: "onyx-sample-tools", components: [
                {kind:"onyx.Checkbox", onchange:"checkboxChanged"},
                {kind:"onyx.Checkbox", onchange:"checkboxChanged"},
                {kind:"onyx.Checkbox", onchange:"checkboxChanged", checked: true}
            ]},
            {tag: "br"},
            {classes: "onyx-sample-divider", content: "Checkboxes Group"},
            {kind: "Group", classes: "onyx-sample-tools group", onActivate:"groupActivated", highlander: true, components: [
                {kind:"onyx.Checkbox", checked: true},
                {kind:"onyx.Checkbox"},
                {kind:"onyx.Checkbox"}
            ]},
            {tag: "br"},
            {classes: "onyx-sample-divider", content: "Toggle Buttons"},
            {classes: "onyx-sample-tools", components: [
                {kind:"onyx.ToggleButton", onChange:"toggleChanged", value: true},
            ]},
            {tag: "br"},
            {classes: "onyx-sample-divider", content: "Inputs"},
            {classes: "onyx-toolbar-inline", components: [
                {kind: "onyx.InputDecorator", components: [
                    {kind: "onyx.Input",style:"width:400px", placeholder: "Enter text here", onchange:"inputChanged"}
                ]},
            ]}
        ]}
	],

	buttonGroupTap: function(inSender, inEvent) {
		enyo.log("The button was tapped.<br/>");
	}
});
