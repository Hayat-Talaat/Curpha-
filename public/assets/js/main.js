;(function(document, window, $, undefined) {
    'use strict';

    var $dataTable = $('.config-table');

    $dataTable.on('click', '.add', function(e) {
            var $row = $(this).closest('tr');
            if ($row.find('.config-select').val() == '' || $row.find('.grade-select').val() == '') {
                $row.addClass('danger');
                return false;
            }
            addRow($row);
        })
        .on('click', '.edit', function(e) {
            var $row = $(this).closest('tr');
            showEdit($row);
        })
        .on('click', '.save', function(e) {
            var $row = $(this).closest('tr');
            if ($row.find('.config-select').val() == '' || $row.find('.grade-select').val() == '') {
                $row.addClass('danger');
                return false;
            }
            saveRow($row);
        })
        .on('click', '.delete', function(e) {
            var $row = $(this).closest('tr');
            $row.fadeOut('slow', function() {
                $row.remove();
            });
        })
        .on('change', '.config-select', function(e) {
            var $row = $(this).closest('tr');
            updateCredits($row, $(this));
        });

    function showEdit($row) {
        $row.addClass('editing active').removeClass('saved');
    }

    function saveRow($row) {
        $row.removeClass('editing config-new-row warning danger error active').addClass('config-saved-row saved');
        var data = getColData($row);
        updateCredits($row, $row.find('.config-select'));
        $row.find('.configuration').text(data.configuration.name).attr('data-course-code', data.configuration.val);
        $row.find('.grade').text(data.grade.name).attr('data-grade-val', data.grade.val);
    }

    function addRow($row) {
        $row.after('<tr class="config-new-row active">' + $row.html() + '</tr>');
        $row.next().find('.configuration, .grade, .credits').text('');
        saveRow($row);
    }

    function updateCredits($row, $select) {
        $row.find('.credits').text($select.find('option:selected').data('credits'));
    }

    function getColData($row) {
        var col = {};
        col.configuration = {};
        col.grade = {};
        col.configuration.name = $row.find('.config-select option:selected').text();
        col.configuration.val = $row.find('.config-select').val();
        col.configuration.credits = $row.find('.config-select option:selected').data('credits');
        col.grade.name = $row.find('.grade-select option:selected').text();
        col.grade.val = $row.find('.grade-select').val();

        return col;
    }
})(document, window, jQuery);