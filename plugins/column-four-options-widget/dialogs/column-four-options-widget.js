CKEDITOR.dialog.add('column-four-options-widget', function (editor) {
  return {
    title: 'Columns Widget',
    minWidth: 300,
    minHeight: 100,
    contents: [{
      id: 'info',
      elements: [
      {
        type: 'html',
        html: '<style>.cke_dialog_ui_input_select{ width: 100%; }</style>'
      },
        {
          id: 'margin',
          type: 'select',
          label: 'Vertical Margin',
          items: [
            ['None', ''],
            ['Small', 'my-4'],
            ['Normal', 'my-6'],
            ['Large', 'my-12'],
            ['X Large', 'my-16']
          ],
          setup: function (widget) {
            this.setValue(widget.data.margin);
          },
          commit: function (widget) {
            widget.setData('margin', this.getValue());
          }
        },
        {
          id: 'keylines',
          type: 'checkbox',
          label: 'Keylines between columns',
          setup: function (widget) {
            this.setValue(widget.data.keylines);
          },
          commit: function (widget) {
            widget.setData('keylines', this.getValue());
          }
        },
        {
          id: 'gap',
          type: 'checkbox',
          label: 'Increase the distance between columns',
          setup: function (widget) {
            this.setValue(widget.data.gap);
          },
          commit: function (widget) {
            widget.setData('gap', this.getValue());
          }
        }
      ]
    }]
  };
});
