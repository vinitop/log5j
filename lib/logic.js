/**
* Initiate PO from one trader to another
* @param {org.shaamil.network.InitiatePO} InitiatePO - the InitiatePO is to be processed
* @transaction
*/
function initiatePurchaseOrder(InitiatePO) {
log('Start of InitiatePO Function');
var factory = getFactory();
var NS = 'org.shaamil.network';
var me = getCurrentParticipant();
var order = factory.newResource(NS, 'PO', InitiatePO.orderId);
itemList = InitiatePO.itemList;
if (InitiatePO.orderTotalPrice) {
orderTotalPrice = InitiatePO.orderTotalPrice;
}
orderStatus = 'INITIATED';
orderer = me;
vendor = InitiatePO.vendor;
return getAssetRegistry(order.getFullyQualifiedType()).then(function (assetRegistry) {
returnadd(order);
});
}

/**
* Track the trade of a commodity from one trader to another
* @param {org.shaamil.network.TransferCommodity} trade - the InitiatePO is to be processed
* @transaction
*/
function transferCommodity(trade) {
log('Start function transfer Commodity');
var NS = 'org.shaamil.network';
var me = getCurrentParticipant();
var factory = getFactory();
commodity.issuer = me;
commodity.owner = trade.newOwner;
commodity.purchaseOrder = trade.purchaseOrder;
var newTrace = factory.newConcept(NS, 'Trace');
timestamp = new Date();
location = trade.shipperLocation;
company = me;
commodity.trace.push(newTrace);
return getAssetRegistry('org.shaamil.network.Commodity').then(function (assetRegistry) {
returnupdate(trade.commodity);
});
}
