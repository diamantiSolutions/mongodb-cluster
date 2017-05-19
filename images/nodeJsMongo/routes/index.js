module.exports = function(app) {
	var db = require('../queries');
	app.route('/api/puppies').get(db.getAllPuppies);
	app.route('/api/puppies/:id').get(db.getSinglePuppy);
	app.route('/api/puppies').post(db.createPuppy);
	app.route('/api/puppies/:id').put(db.updatePuppy);
	app.route('/api/puppies/:id').delete(db.removePuppy);
};
