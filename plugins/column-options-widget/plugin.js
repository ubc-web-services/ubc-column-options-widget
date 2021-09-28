'use strict';
(function () {
  CKEDITOR.plugins.add('column-options-widget', {
    requires: 'widget',
    icons: 'column-options-widget',
    init: function (editor) {
      // Register the editing dialog.
      CKEDITOR.dialog.add('column-options-widget', this.path + 'dialogs/column-options-widget.js');
      editor.addContentsCss(this.path + 'css/column-options-widget.css');
      editor.ui.addButton('column-options-widget', {
        label: 'Insert Columns with options',
        icon: this.path + 'icons/column-options-widget.png',
        command: 'column-options-widget'
      });

      editor.widgets.add('column-options-widget', {
        template: '<div class="widget-color-box">' +
        '<div class="widget-content first-child--mt-0"><p>sample content</p></div>' +
        '</div>',
        template: '<div class="widget-column-options align-equal my-6">' +
        '<div class="widget--md--grid">' +
        '<div class="widget-region-one first-child--mt-0"><p>sample content</p></div>' +
        '<div class="widget-region-two first-child--mt-0"><p>sample content</p></div>' +
        '</div>',
        allowedContent: 'div(!widget-column-options,!align-*,my-*);' +
        'div(!widget--md--grid);' +
        'div(!widget-first-region,first-child-*);' +
        'div(!widget-second-region,first-child-*);',
        requiredContent: 'div(widget-color-box)',
        editables: {
          col1: {
            selector: '.widget-region-one'
          },
          col2: {
            selector: '.widget-region-two'
          },
        },

        button: 'Add a Column with options',
        dialog: 'column-options-widget',

        upcast: function (element) {
          return element.name == 'div' && element.hasClass('widget-column-options');
        },

        init: function () {
          if (this.element.hasClass('align-equal'))
            this.setData('align', 'align-equal');
          if (this.element.hasClass('align-large-left'))
            this.setData('align', 'align-large-left');
          if (this.element.hasClass('align-large-right'))
            this.setData('align', 'align-large-right');
          if (this.element.hasClass('my-4'))
            this.setData('margin', 'my-4');
          if (this.element.hasClass('my-6'))
            this.setData('margin', 'my-6');
          if (this.element.hasClass('my-12'))
            this.setData('margin', 'my-12');
          if (this.element.hasClass('my-16'))
            this.setData('margin', 'my-16');
        },

        data: function () {
          this.element.removeClass('align-equal');
          this.element.removeClass('align-large-left');
          this.element.removeClass('align-large-right');

          this.element.removeClass('my-4');
          this.element.removeClass('my-6');
          this.element.removeClass('my-12');
          this.element.removeClass('my-16');

          if (this.data.align)
            this.element.addClass(this.data.align);

          if (this.data.margin)
            this.element.addClass(this.data.margin);

        }
      });
    }
  });
})(jQuery);
