document.arrive(
  '.player-statistics-operators-selector-attacker .rs-molecule-operator-statistics .statistics-column.player-match[ng-click]',
  function() {
    var attackerSortButton = document.querySelectorAll(
      '.player-statistics-operators-selector-attacker .rs-molecule-operator-statistics .statistics-column.player-match[ng-click]'
    )[0]
    attackerSortButton.click()

    var defenderSortButton = document.querySelectorAll(
      '.player-statistics-operators-selector-defender .rs-molecule-operator-statistics .statistics-column.player-match[ng-click]'
    )[0]
    defenderSortButton.click()
  }
);
