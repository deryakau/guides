/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface IGelatoVRFConsumerInterface extends Interface {
  getFunction(nameOrSignature: "fulfillRandomness"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "RequestedRandomness"): EventFragment;

  encodeFunctionData(
    functionFragment: "fulfillRandomness",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "fulfillRandomness",
    data: BytesLike
  ): Result;
}

export namespace RequestedRandomnessEvent {
  export type InputTuple = [round: BigNumberish, data: BytesLike];
  export type OutputTuple = [round: bigint, data: string];
  export interface OutputObject {
    round: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IGelatoVRFConsumer extends BaseContract {
  connect(runner?: ContractRunner | null): IGelatoVRFConsumer;
  waitForDeployment(): Promise<this>;

  interface: IGelatoVRFConsumerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  fulfillRandomness: TypedContractMethod<
    [randomness: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "fulfillRandomness"
  ): TypedContractMethod<
    [randomness: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "RequestedRandomness"
  ): TypedContractEvent<
    RequestedRandomnessEvent.InputTuple,
    RequestedRandomnessEvent.OutputTuple,
    RequestedRandomnessEvent.OutputObject
  >;

  filters: {
    "RequestedRandomness(uint256,bytes)": TypedContractEvent<
      RequestedRandomnessEvent.InputTuple,
      RequestedRandomnessEvent.OutputTuple,
      RequestedRandomnessEvent.OutputObject
    >;
    RequestedRandomness: TypedContractEvent<
      RequestedRandomnessEvent.InputTuple,
      RequestedRandomnessEvent.OutputTuple,
      RequestedRandomnessEvent.OutputObject
    >;
  };
}
