$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
//首頁新增tag
$(function() {
      var app;

      $(document).ready(function() {
        return app.init();
      });

      app = {
        can_delete: false,
        init: function() {
          return this.bind_events();
        },
        bind_events: function() {
          return $(document).on("keyup", ".input-search input", function(e) {
            var key;
            key = e.keyCode || e.which;
            if (key === 13 || key === 188) {
              app.add_tag($(this).val().replace(",", ""));
              return $(this).val("");
            } else if (key === 8) {
              if ($(this).val() === "") {
                return app.delete_tag();
              }
            } else {
              app.can_delete = false;
              return $(".highlight").removeClass("highlight");
            }
          });
        },
        delete_tag: function() {
          if (this.can_delete) {
            $(".input-search .tag.highlight").remove();
            return this.can_delete = false;
          } else {
            this.can_delete = true;
            return $(".input-search .tag:last-of-type").addClass("highlight");
          }
        },
        add_tag: function(name) {
          return $(".input-search input").before("<div class='tag'>" + name + "</div>");
        }
      };

    });