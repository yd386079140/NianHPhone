declare class Result<T> {
  success: boolean;
  data: T;
  message: string;
}
declare class Pages<T> extends Result<T> {
  totalCount: int;
  page: int;
  hasNext: boolean;
}

declare class Slide {
  title: string;
  id: int;
  imageUrl: string;
  redirectUrl: string;
  sequenceNo: int;
}
declare class ResultSlide extends Result<Slide[]> {}
declare class ResultStringArray extends Result<string[]> {}

declare class GetGradeFriendDetailOptoins {
  userGradeId: number;
  /**
   * 0:全部 1：直接好友 2：间接好友
   */
  isDirectFriend: number;
  page: number;
}

declare class MyFriendItem {
  ycdeerGradeId: number;
  /**
   * 等级名称
   */
  ycdeerGradeName: string;
  /**
   * 直接好友
   */
  directFriend: number;
  /**
   * 间接好友
   */
  indirectFriend: number;
  /**
   * 所友好友数量
   */
  allFriend: number;
  /**
   * 等级序号
   */
  sequenceNo: number;
}

declare class ResultMyFriendItem extends Result<MyFriendItem[]> {}

declare class GradeFriendItemPages extends Pages<GradeFriendItem> {}

declare class GradeFriendItem {
  phone: string;
  userId: number;
  /**
   * 上级ID
   */
  parentUserId: number;
  /**
   * 真实姓名
   */
  realName: string;
  openId: string;
  nickName: string;
  headImg: string;
  isDirectFriend: boolean;
}

declare class Withdraw {
  /**
   *订单号
   */
  orderNo: string;
  /**
   *银行图片地址
   */
  bankIconUrl: string;
  /**
   *银行名称
   */
  bankCardName: string;
  /**
   *银行卡号（后四位）
   */
  bankMaskCardNo: string;
  /**
   *提现金额
   */
  withdrawAmount: flot;
  /**
   *提现时间
   */
  withdrawDateTime: Date;
  /**
   *状态
   */
  orderStatus: string;
}

declare class WithdrawPages extends Pages<Withdraw> {}

declare class ResultWithdrawPages extends Result<WithdrawPages> {}

declare class WithdrawDetails {
  /**
   *订单号
   */
  orderNo: string;
  /**
   *付款银行图片
   */
  payBankIconUrl: string;
  /**
   *付款银行名称
   */
  payBankCardName: string;
  /**
   *付款银行卡号，后四位
   */
  payBankMaskCardNo: string;
  /**
   *收款银行图片
   */
  recBankIconUrl: string;
  /**
   *收款银行名称
   */
  recBankCardName: string;
  /**
   *收款银行卡号后四位
   */
  recBankMaskCardNo: string;
  /**
   *提现金额
   */
  withdrawAmount: float;
  /**
   *提现服务费
   */
  withdrawServiceAmount: float;
  /**
   *提现手续费
   */
  withdrawChargeAmount: float;
  /**
   *实际付款金额
   */
  withdrawPaidAmount: float;
  /**
   *交易时间
   */
  withdrawDateTime: Date;
  /**
   *交易状态
   */
  orderStatus: string;
}

declare class ResultWithdrawDetails extends Result<WithdrawDetails> {}

declare class ProfitItem {
  /**
   * 分润记录id
   */
  id: number;
  /**
   * 用户姓名
   */
  userName: string;
  /**
   * 用户等级
   */
  userGrade: string;
  /**
   * 产生分润时间
   */
  profitTime: Date;
  /**
   * 分润金额
   */
  profitAmount: float;
  /**
   * 用户头像
   */
  userHeader: string;
}

declare class ProfitPages extends Pages<ProfitItem> {}

declare class ProfitDetails {
  userName: string;
  /**
   * 分润金额
   */
  profitAmount: string;
  /**
   * 分润时间
   */
  profitTime: Date;
  /**
   * 分润类型
   */
  profitType: string;
  /**
   * 原等级名称
   */
  beforeGradeName: string;
  /**
   * 当前等级名称
   */
  afterGradeName: string;
  /**
   * 提现通道组名称
   */
  channelName: string;
}

declare class ResultProfitDetails extends Result<ProfitDetails> {}

declare class InviteAccount {
  userId: number;
  /**
   * 余额
   */
  balanceAmount: float;
  /**
   * 今日分润总额
   */
  todayProfitAmount: float;
  /**
   * 本月分润总额
   */
  monthProfitAmount: flaot;
  /**
   * 总分润金额
   */
  totalProfitAmount: float;
  /**
   * 好友总数
   */
  friendCount: int;
}

declare class ResultInviteAccount extends Result<InviteAccount> {}

declare class CardItem {
  accountNo: string;
  bankCode: string;
  bankIconUrl: string;
  bankName: string;
  cardType: string;
  id: int;
  maskAccountNo: string;
}

declare class ResultCardList extends Result<CardItem[]> {}

declare class ProfitWithdrawItem {
  /**
   * 提现订单号
   */
  orderNo: string;
  /**
   * 状态
   */
  status: string;
  /**
   * 提现金额
   */
  withdrawAmount: float;
  /**
   * 发起时间
   */
  withdrawTime: Date;
}

declare class ProfitWithdrawItemPages extends Pages<ProfitWithdrawItem> {}

declare class UserProfitFriendInfo {
  friendCount: number;
  todayProfitAmount: number;
  monthProfitAmount: number;
  totalProfitAmount: number;
  balanceAmount: float;
  userId: number;
}
declare class ResultUserProfitFriendInfo extends Result<UserProfitFriendInfo> {}

declare class ChannelProfitInfo {
  /**
   * 当前用户等级
   */
  gradeName: string;
  channelList: {
    /**
     * 通道ID
     */
    channelGroupId: number;
    /**
     * 通道名称
     */
    channelGroupName: string;
    /**
     * 服务费
     */
    feeAmount: number;
    /**
     * 提现费率
     */
    withdrawRate: number;
    /**
     * 限额
     */
    maxAmount: number;
  }[];
}

declare class ResultChannelProfitInfo extends Result<ChannelProfitInfo> {}

declare class ChannelProfitDetail {
  channelDetailInfo: {
    channelGroupId: number;
    channelGroupName: string;
    /**
     * 通道费率
     */
    charge: number;
    /**
     * 支持银行列表
     */
    supportBankList: {
      bankName: string;
      /**
       * 日限
       */
      dailyAmount: float;
      /**
       * 笔限
       */
      singleAmount: number;
      /**
       * 银行图标
       */
      smallIcon: string;
    }[];
  };
  /**
   * 等级通道费率列表
   */
  gradeChannelRuleList: {
    channelGroupId: number;
    channelGroupName: string;
    /**
     * 费用
     */
    feeAmount: number;
    id: number;
    /**
     * 提现费率
     */
    withdrawRate: number;
    /**
     * 等级编号
     */
    ycdeerGradeId: number;
    /**
     * 等级名称
     */
    ycdeerGradeName: string;
    /**
     * 最大金额
     */
    maxAmount: number;
  }[];
}

declare class ResultChannelProfitDetail extends Result<ChannelProfitDetail> {}
