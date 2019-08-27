// @flow
//
// Copyright (C) 2019 ExtraHash
//
// Please see the included LICENSE file for more information.
export default function uiType(darkMode: boolean) {
  const backgroundColor =
    darkMode === true ? 'has-background-dark' : 'has-background-white';

  const fillColor =
    darkMode === true ? 'has-background-black' : 'has-background-light';

  const textColor = darkMode === true ? 'has-text-white' : '';

  const redTitleColor = darkMode === true ? 'has-text-danger' : '';

  const elementBaseColor = darkMode === true ? 'is-black' : 'is-light';

  const tableMode = darkMode === true ? 'table-darkmode' : '';

  const settingsCogColor = darkMode === true ? 'is-dark' : '';

  const linkColor = darkMode === true ? 'darklink' : '';

  const buttonColor = darkMode === true ? 'is-dark' : '';

  const response = {
    backgroundColor,
    fillColor,
    textColor,
    redTitleColor,
    elementBaseColor,
    tableMode,
    settingsCogColor,
    linkColor,
    buttonColor
  };

  return response;
}
