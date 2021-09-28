CKEDITOR.dialog.add('column-options-widget', function (editor) {
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
          id: 'align',
          type: 'select',
          label: 'Column Widths',
          items: [
            ['Equal', 'align-equal'],
            ['Large left', 'align-large-left'],
            ['Large right', 'align-large-right']
          ],
          setup: function (widget) {
            this.setValue(widget.data.align);
          },
          commit: function (widget) {
            widget.setData('align', this.getValue());
          }
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
        }
      ]
    }]
  };
});
