'use strict';

var _ = require('lodash');

function BaseUnit() {}

BaseUnit.SIDE_LEFT = 'left';

BaseUnit.SIDE_RIGHT = 'right';

BaseUnit.STATUS_ALIVE = 'alive';

BaseUnit.STATUS_DEAD = 'dead';

BaseUnit.prototype.side = null;

BaseUnit.prototype.position = null;

BaseUnit.prototype.status = BaseUnit.STATUS_ALIVE;

BaseUnit.prototype.isAlive = function() {
    return this.status === BaseUnit.STATUS_ALIVE;
};

BaseUnit.prototype._computeDamage = function() {
    var self = this,
        grossDamage = self.stats.attack * 5,
        random = _.random(-1, 1),
        damage;

    damage = grossDamage + random;
    damage = damage > 0 ? damage : 1;

    return damage;
};

BaseUnit.prototype.attack = function(targetUnit) {
    var self = this,
        damage = self._computeDamage(targetUnit);

    targetUnit._takeDamage(damage);
};

BaseUnit.prototype._takeDamage = function(grossDamage) {
    var self = this,
        defended = self.stats.defense,
        newHealthPoint;

    newHealthPoint = self.stats.healthPoint - grossDamage;

    if (newHealthPoint > 0) {
        self.stats.healthPoint = newHealthPoint;
    } else {
        self.stats.healthPoint = 0;
        self._die();
    }
};

BaseUnit.prototype._die = function() {
    var self = this;
    self.status = BaseUnit.STATUS_DEAD;
};

module.exports = BaseUnit;