/* global React */
import { $table, $thead, $th, $tr, $td, $tbody } from '..';

export const $tableheaders = (props, names) => {
  return $thead(Object.assign({}, props), $tr({}, names.map((name, index) =>
    $th(Object.assign({ key: index }), name))
  ));
};

export const $tablerow = (props, items) => {
  return $tr(props, items.map((item, index) =>
    $td({ key: index }, item)));
};

export const $tableTemplate = (props, columnNames, rowData) => {
  return $table(props, [
    $tableheaders({ key: 0 }, columnNames),
    $tbody({ key: 1 }, rowData.map((cellData, rowIndex) =>
      $tablerow({ key: rowIndex }, cellData)))
  ]);
};

