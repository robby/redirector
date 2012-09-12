module.exports.rules = {};

module.exports.middleware = function(req, res, next) {
	var rule;

	if(rule = module.exports.rules[req.url]) {
		if(rule.location) {
			return res.redirect(rule.location, rule.status);
		}
		else if(rule.status) {
			return res.send(rule.data, rule.status);
		}
	}
	
	next();	
}