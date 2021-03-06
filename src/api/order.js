/*
 * 订单确认
 * */
import request from "@utils/request";

/**
 * 通过购物车 id 获取订单信息
 * @param cartId
 * @returns {*}
 */
export function postOrderConfirm(cartId) {
  return request.post("/order/confirm", { cartId });
}

/**
 * 验证优惠码
 * @param couponCode
 * @param data
 * @returns {*}
 */
export function postCouponCode(couponCode) {
  return request.post("/coupon/verifyCouponCode", {
    couponCode: couponCode
  });
}

/**
 * 计算订单金额
 * @param key
 * @param data
 * @returns {*}
 */
export function postOrderComputed(key, data) {
  return request.post("/order/computed/" + key, data);
}

/**
 * 获取指定金额可用优惠券
 * @param price
 * @returns {*}
 * 以前是通过金额来获取可用的优惠券，但是现在换成了用订单key来换取列表。
 */
export function getOrderCoupon(orderCacheKey) {
  return request.get("/order/coupons/" + orderCacheKey);
}

/**
 * 生成订单
 * @param key
 * @param data
 * @returns {*}
 */
export function createOrder(key, data) {
  return request.post("/order/create/" + key, data || {});
}

/**
 * 订单统计数据
 * @returns {*}
 */
export function getOrderData() {
  return request.get("/order/data");
}

/**
 * 订单列表
 * @returns {*}
 */
export function getOrderList(data) {
  return request.get("/order/list", data);
}

/**
 * 取消订单
 * @returns {*}
 */
export function cancelOrder(id) {
  return request.post("/order/cancel", { id });
}

/**
 * 订单详情
 * @returns {*}
 */
export function orderDetail(id) {
  return request.get("/order/detail/" + id);
}

/**
 * 退款理由
 * @returns {*}
 */
export function getRefundReason() {
  return request.get("/order/refund/reason");
}

/**
 * 提交退款
 * @returns {*}
 */
export function postOrderRefund(data) {
  return request.post("/order/refund/verify", data);
}

/**
 * 确认收货
 * @returns {*}
 */
export function takeOrder(uni) {
  return request.post("/order/take", { uni });
}

/**
 * 删除订单
 * @returns {*}
 */
export function delOrder(uni) {
  return request.post("/order/del", { uni });
}

/**
 * 订单查询物流信息
 * @returns {*}
 */
export function express(uni) {
  return request.get("order/express/" + uni);
}

/**
 * 订单支付
 * @returns {*}
 */
export function payOrder(uni, paytype, from) {
  return request.post("order/pay", { uni, paytype, from });
}
