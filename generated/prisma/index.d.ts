
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AppUpdate
 * 
 */
export type AppUpdate = $Result.DefaultSelection<Prisma.$AppUpdatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AppUpdates
 * const appUpdates = await prisma.appUpdate.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AppUpdates
   * const appUpdates = await prisma.appUpdate.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.appUpdate`: Exposes CRUD operations for the **AppUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUpdates
    * const appUpdates = await prisma.appUpdate.findMany()
    * ```
    */
  get appUpdate(): Prisma.AppUpdateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AppUpdate: 'AppUpdate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "appUpdate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AppUpdate: {
        payload: Prisma.$AppUpdatePayload<ExtArgs>
        fields: Prisma.AppUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUpdatePayload>
          }
          findFirst: {
            args: Prisma.AppUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUpdatePayload>
          }
          findMany: {
            args: Prisma.AppUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUpdatePayload>[]
          }
          create: {
            args: Prisma.AppUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUpdatePayload>
          }
          createMany: {
            args: Prisma.AppUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUpdatePayload>[]
          }
          delete: {
            args: Prisma.AppUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUpdatePayload>
          }
          update: {
            args: Prisma.AppUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUpdatePayload>
          }
          deleteMany: {
            args: Prisma.AppUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUpdatePayload>[]
          }
          upsert: {
            args: Prisma.AppUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUpdatePayload>
          }
          aggregate: {
            args: Prisma.AppUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppUpdate>
          }
          groupBy: {
            args: Prisma.AppUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<AppUpdateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    appUpdate?: AppUpdateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AppUpdate
   */

  export type AggregateAppUpdate = {
    _count: AppUpdateCountAggregateOutputType | null
    _avg: AppUpdateAvgAggregateOutputType | null
    _sum: AppUpdateSumAggregateOutputType | null
    _min: AppUpdateMinAggregateOutputType | null
    _max: AppUpdateMaxAggregateOutputType | null
  }

  export type AppUpdateAvgAggregateOutputType = {
    id: number | null
  }

  export type AppUpdateSumAggregateOutputType = {
    id: number | null
  }

  export type AppUpdateMinAggregateOutputType = {
    id: number | null
    event: string | null
    version: string | null
    platform: string | null
    arch: string | null
    timestamp: Date | null
    hostname: string | null
    createdAt: Date | null
  }

  export type AppUpdateMaxAggregateOutputType = {
    id: number | null
    event: string | null
    version: string | null
    platform: string | null
    arch: string | null
    timestamp: Date | null
    hostname: string | null
    createdAt: Date | null
  }

  export type AppUpdateCountAggregateOutputType = {
    id: number
    event: number
    version: number
    platform: number
    arch: number
    timestamp: number
    hostname: number
    createdAt: number
    _all: number
  }


  export type AppUpdateAvgAggregateInputType = {
    id?: true
  }

  export type AppUpdateSumAggregateInputType = {
    id?: true
  }

  export type AppUpdateMinAggregateInputType = {
    id?: true
    event?: true
    version?: true
    platform?: true
    arch?: true
    timestamp?: true
    hostname?: true
    createdAt?: true
  }

  export type AppUpdateMaxAggregateInputType = {
    id?: true
    event?: true
    version?: true
    platform?: true
    arch?: true
    timestamp?: true
    hostname?: true
    createdAt?: true
  }

  export type AppUpdateCountAggregateInputType = {
    id?: true
    event?: true
    version?: true
    platform?: true
    arch?: true
    timestamp?: true
    hostname?: true
    createdAt?: true
    _all?: true
  }

  export type AppUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUpdate to aggregate.
     */
    where?: AppUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUpdates to fetch.
     */
    orderBy?: AppUpdateOrderByWithRelationInput | AppUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppUpdates
    **/
    _count?: true | AppUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppUpdateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppUpdateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUpdateMaxAggregateInputType
  }

  export type GetAppUpdateAggregateType<T extends AppUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUpdate[P]>
      : GetScalarType<T[P], AggregateAppUpdate[P]>
  }




  export type AppUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUpdateWhereInput
    orderBy?: AppUpdateOrderByWithAggregationInput | AppUpdateOrderByWithAggregationInput[]
    by: AppUpdateScalarFieldEnum[] | AppUpdateScalarFieldEnum
    having?: AppUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUpdateCountAggregateInputType | true
    _avg?: AppUpdateAvgAggregateInputType
    _sum?: AppUpdateSumAggregateInputType
    _min?: AppUpdateMinAggregateInputType
    _max?: AppUpdateMaxAggregateInputType
  }

  export type AppUpdateGroupByOutputType = {
    id: number
    event: string
    version: string
    platform: string
    arch: string
    timestamp: Date
    hostname: string | null
    createdAt: Date
    _count: AppUpdateCountAggregateOutputType | null
    _avg: AppUpdateAvgAggregateOutputType | null
    _sum: AppUpdateSumAggregateOutputType | null
    _min: AppUpdateMinAggregateOutputType | null
    _max: AppUpdateMaxAggregateOutputType | null
  }

  type GetAppUpdateGroupByPayload<T extends AppUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], AppUpdateGroupByOutputType[P]>
        }
      >
    >


  export type AppUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    version?: boolean
    platform?: boolean
    arch?: boolean
    timestamp?: boolean
    hostname?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["appUpdate"]>

  export type AppUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    version?: boolean
    platform?: boolean
    arch?: boolean
    timestamp?: boolean
    hostname?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["appUpdate"]>

  export type AppUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    version?: boolean
    platform?: boolean
    arch?: boolean
    timestamp?: boolean
    hostname?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["appUpdate"]>

  export type AppUpdateSelectScalar = {
    id?: boolean
    event?: boolean
    version?: boolean
    platform?: boolean
    arch?: boolean
    timestamp?: boolean
    hostname?: boolean
    createdAt?: boolean
  }

  export type AppUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event" | "version" | "platform" | "arch" | "timestamp" | "hostname" | "createdAt", ExtArgs["result"]["appUpdate"]>

  export type $AppUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUpdate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event: string
      version: string
      platform: string
      arch: string
      timestamp: Date
      hostname: string | null
      createdAt: Date
    }, ExtArgs["result"]["appUpdate"]>
    composites: {}
  }

  type AppUpdateGetPayload<S extends boolean | null | undefined | AppUpdateDefaultArgs> = $Result.GetResult<Prisma.$AppUpdatePayload, S>

  type AppUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppUpdateCountAggregateInputType | true
    }

  export interface AppUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppUpdate'], meta: { name: 'AppUpdate' } }
    /**
     * Find zero or one AppUpdate that matches the filter.
     * @param {AppUpdateFindUniqueArgs} args - Arguments to find a AppUpdate
     * @example
     * // Get one AppUpdate
     * const appUpdate = await prisma.appUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppUpdateFindUniqueArgs>(args: SelectSubset<T, AppUpdateFindUniqueArgs<ExtArgs>>): Prisma__AppUpdateClient<$Result.GetResult<Prisma.$AppUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppUpdateFindUniqueOrThrowArgs} args - Arguments to find a AppUpdate
     * @example
     * // Get one AppUpdate
     * const appUpdate = await prisma.appUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, AppUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppUpdateClient<$Result.GetResult<Prisma.$AppUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUpdateFindFirstArgs} args - Arguments to find a AppUpdate
     * @example
     * // Get one AppUpdate
     * const appUpdate = await prisma.appUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppUpdateFindFirstArgs>(args?: SelectSubset<T, AppUpdateFindFirstArgs<ExtArgs>>): Prisma__AppUpdateClient<$Result.GetResult<Prisma.$AppUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUpdateFindFirstOrThrowArgs} args - Arguments to find a AppUpdate
     * @example
     * // Get one AppUpdate
     * const appUpdate = await prisma.appUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, AppUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppUpdateClient<$Result.GetResult<Prisma.$AppUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUpdates
     * const appUpdates = await prisma.appUpdate.findMany()
     * 
     * // Get first 10 AppUpdates
     * const appUpdates = await prisma.appUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appUpdateWithIdOnly = await prisma.appUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppUpdateFindManyArgs>(args?: SelectSubset<T, AppUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppUpdate.
     * @param {AppUpdateCreateArgs} args - Arguments to create a AppUpdate.
     * @example
     * // Create one AppUpdate
     * const AppUpdate = await prisma.appUpdate.create({
     *   data: {
     *     // ... data to create a AppUpdate
     *   }
     * })
     * 
     */
    create<T extends AppUpdateCreateArgs>(args: SelectSubset<T, AppUpdateCreateArgs<ExtArgs>>): Prisma__AppUpdateClient<$Result.GetResult<Prisma.$AppUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppUpdates.
     * @param {AppUpdateCreateManyArgs} args - Arguments to create many AppUpdates.
     * @example
     * // Create many AppUpdates
     * const appUpdate = await prisma.appUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppUpdateCreateManyArgs>(args?: SelectSubset<T, AppUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppUpdates and returns the data saved in the database.
     * @param {AppUpdateCreateManyAndReturnArgs} args - Arguments to create many AppUpdates.
     * @example
     * // Create many AppUpdates
     * const appUpdate = await prisma.appUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppUpdates and only return the `id`
     * const appUpdateWithIdOnly = await prisma.appUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, AppUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppUpdate.
     * @param {AppUpdateDeleteArgs} args - Arguments to delete one AppUpdate.
     * @example
     * // Delete one AppUpdate
     * const AppUpdate = await prisma.appUpdate.delete({
     *   where: {
     *     // ... filter to delete one AppUpdate
     *   }
     * })
     * 
     */
    delete<T extends AppUpdateDeleteArgs>(args: SelectSubset<T, AppUpdateDeleteArgs<ExtArgs>>): Prisma__AppUpdateClient<$Result.GetResult<Prisma.$AppUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppUpdate.
     * @param {AppUpdateUpdateArgs} args - Arguments to update one AppUpdate.
     * @example
     * // Update one AppUpdate
     * const appUpdate = await prisma.appUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUpdateUpdateArgs>(args: SelectSubset<T, AppUpdateUpdateArgs<ExtArgs>>): Prisma__AppUpdateClient<$Result.GetResult<Prisma.$AppUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppUpdates.
     * @param {AppUpdateDeleteManyArgs} args - Arguments to filter AppUpdates to delete.
     * @example
     * // Delete a few AppUpdates
     * const { count } = await prisma.appUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppUpdateDeleteManyArgs>(args?: SelectSubset<T, AppUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUpdates
     * const appUpdate = await prisma.appUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUpdateUpdateManyArgs>(args: SelectSubset<T, AppUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUpdates and returns the data updated in the database.
     * @param {AppUpdateUpdateManyAndReturnArgs} args - Arguments to update many AppUpdates.
     * @example
     * // Update many AppUpdates
     * const appUpdate = await prisma.appUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppUpdates and only return the `id`
     * const appUpdateWithIdOnly = await prisma.appUpdate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, AppUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppUpdate.
     * @param {AppUpdateUpsertArgs} args - Arguments to update or create a AppUpdate.
     * @example
     * // Update or create a AppUpdate
     * const appUpdate = await prisma.appUpdate.upsert({
     *   create: {
     *     // ... data to create a AppUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUpdate we want to update
     *   }
     * })
     */
    upsert<T extends AppUpdateUpsertArgs>(args: SelectSubset<T, AppUpdateUpsertArgs<ExtArgs>>): Prisma__AppUpdateClient<$Result.GetResult<Prisma.$AppUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUpdateCountArgs} args - Arguments to filter AppUpdates to count.
     * @example
     * // Count the number of AppUpdates
     * const count = await prisma.appUpdate.count({
     *   where: {
     *     // ... the filter for the AppUpdates we want to count
     *   }
     * })
    **/
    count<T extends AppUpdateCountArgs>(
      args?: Subset<T, AppUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppUpdateAggregateArgs>(args: Subset<T, AppUpdateAggregateArgs>): Prisma.PrismaPromise<GetAppUpdateAggregateType<T>>

    /**
     * Group by AppUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUpdateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppUpdateGroupByArgs['orderBy'] }
        : { orderBy?: AppUpdateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppUpdate model
   */
  readonly fields: AppUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppUpdate model
   */
  interface AppUpdateFieldRefs {
    readonly id: FieldRef<"AppUpdate", 'Int'>
    readonly event: FieldRef<"AppUpdate", 'String'>
    readonly version: FieldRef<"AppUpdate", 'String'>
    readonly platform: FieldRef<"AppUpdate", 'String'>
    readonly arch: FieldRef<"AppUpdate", 'String'>
    readonly timestamp: FieldRef<"AppUpdate", 'DateTime'>
    readonly hostname: FieldRef<"AppUpdate", 'String'>
    readonly createdAt: FieldRef<"AppUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppUpdate findUnique
   */
  export type AppUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
    /**
     * Filter, which AppUpdate to fetch.
     */
    where: AppUpdateWhereUniqueInput
  }

  /**
   * AppUpdate findUniqueOrThrow
   */
  export type AppUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
    /**
     * Filter, which AppUpdate to fetch.
     */
    where: AppUpdateWhereUniqueInput
  }

  /**
   * AppUpdate findFirst
   */
  export type AppUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
    /**
     * Filter, which AppUpdate to fetch.
     */
    where?: AppUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUpdates to fetch.
     */
    orderBy?: AppUpdateOrderByWithRelationInput | AppUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUpdates.
     */
    cursor?: AppUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUpdates.
     */
    distinct?: AppUpdateScalarFieldEnum | AppUpdateScalarFieldEnum[]
  }

  /**
   * AppUpdate findFirstOrThrow
   */
  export type AppUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
    /**
     * Filter, which AppUpdate to fetch.
     */
    where?: AppUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUpdates to fetch.
     */
    orderBy?: AppUpdateOrderByWithRelationInput | AppUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUpdates.
     */
    cursor?: AppUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUpdates.
     */
    distinct?: AppUpdateScalarFieldEnum | AppUpdateScalarFieldEnum[]
  }

  /**
   * AppUpdate findMany
   */
  export type AppUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
    /**
     * Filter, which AppUpdates to fetch.
     */
    where?: AppUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUpdates to fetch.
     */
    orderBy?: AppUpdateOrderByWithRelationInput | AppUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppUpdates.
     */
    cursor?: AppUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUpdates.
     */
    skip?: number
    distinct?: AppUpdateScalarFieldEnum | AppUpdateScalarFieldEnum[]
  }

  /**
   * AppUpdate create
   */
  export type AppUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
    /**
     * The data needed to create a AppUpdate.
     */
    data: XOR<AppUpdateCreateInput, AppUpdateUncheckedCreateInput>
  }

  /**
   * AppUpdate createMany
   */
  export type AppUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppUpdates.
     */
    data: AppUpdateCreateManyInput | AppUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUpdate createManyAndReturn
   */
  export type AppUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many AppUpdates.
     */
    data: AppUpdateCreateManyInput | AppUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUpdate update
   */
  export type AppUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
    /**
     * The data needed to update a AppUpdate.
     */
    data: XOR<AppUpdateUpdateInput, AppUpdateUncheckedUpdateInput>
    /**
     * Choose, which AppUpdate to update.
     */
    where: AppUpdateWhereUniqueInput
  }

  /**
   * AppUpdate updateMany
   */
  export type AppUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppUpdates.
     */
    data: XOR<AppUpdateUpdateManyMutationInput, AppUpdateUncheckedUpdateManyInput>
    /**
     * Filter which AppUpdates to update
     */
    where?: AppUpdateWhereInput
    /**
     * Limit how many AppUpdates to update.
     */
    limit?: number
  }

  /**
   * AppUpdate updateManyAndReturn
   */
  export type AppUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
    /**
     * The data used to update AppUpdates.
     */
    data: XOR<AppUpdateUpdateManyMutationInput, AppUpdateUncheckedUpdateManyInput>
    /**
     * Filter which AppUpdates to update
     */
    where?: AppUpdateWhereInput
    /**
     * Limit how many AppUpdates to update.
     */
    limit?: number
  }

  /**
   * AppUpdate upsert
   */
  export type AppUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
    /**
     * The filter to search for the AppUpdate to update in case it exists.
     */
    where: AppUpdateWhereUniqueInput
    /**
     * In case the AppUpdate found by the `where` argument doesn't exist, create a new AppUpdate with this data.
     */
    create: XOR<AppUpdateCreateInput, AppUpdateUncheckedCreateInput>
    /**
     * In case the AppUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUpdateUpdateInput, AppUpdateUncheckedUpdateInput>
  }

  /**
   * AppUpdate delete
   */
  export type AppUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
    /**
     * Filter which AppUpdate to delete.
     */
    where: AppUpdateWhereUniqueInput
  }

  /**
   * AppUpdate deleteMany
   */
  export type AppUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUpdates to delete
     */
    where?: AppUpdateWhereInput
    /**
     * Limit how many AppUpdates to delete.
     */
    limit?: number
  }

  /**
   * AppUpdate without action
   */
  export type AppUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUpdate
     */
    select?: AppUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUpdate
     */
    omit?: AppUpdateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppUpdateScalarFieldEnum: {
    id: 'id',
    event: 'event',
    version: 'version',
    platform: 'platform',
    arch: 'arch',
    timestamp: 'timestamp',
    hostname: 'hostname',
    createdAt: 'createdAt'
  };

  export type AppUpdateScalarFieldEnum = (typeof AppUpdateScalarFieldEnum)[keyof typeof AppUpdateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AppUpdateWhereInput = {
    AND?: AppUpdateWhereInput | AppUpdateWhereInput[]
    OR?: AppUpdateWhereInput[]
    NOT?: AppUpdateWhereInput | AppUpdateWhereInput[]
    id?: IntFilter<"AppUpdate"> | number
    event?: StringFilter<"AppUpdate"> | string
    version?: StringFilter<"AppUpdate"> | string
    platform?: StringFilter<"AppUpdate"> | string
    arch?: StringFilter<"AppUpdate"> | string
    timestamp?: DateTimeFilter<"AppUpdate"> | Date | string
    hostname?: StringNullableFilter<"AppUpdate"> | string | null
    createdAt?: DateTimeFilter<"AppUpdate"> | Date | string
  }

  export type AppUpdateOrderByWithRelationInput = {
    id?: SortOrder
    event?: SortOrder
    version?: SortOrder
    platform?: SortOrder
    arch?: SortOrder
    timestamp?: SortOrder
    hostname?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AppUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppUpdateWhereInput | AppUpdateWhereInput[]
    OR?: AppUpdateWhereInput[]
    NOT?: AppUpdateWhereInput | AppUpdateWhereInput[]
    event?: StringFilter<"AppUpdate"> | string
    version?: StringFilter<"AppUpdate"> | string
    platform?: StringFilter<"AppUpdate"> | string
    arch?: StringFilter<"AppUpdate"> | string
    timestamp?: DateTimeFilter<"AppUpdate"> | Date | string
    hostname?: StringNullableFilter<"AppUpdate"> | string | null
    createdAt?: DateTimeFilter<"AppUpdate"> | Date | string
  }, "id">

  export type AppUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    event?: SortOrder
    version?: SortOrder
    platform?: SortOrder
    arch?: SortOrder
    timestamp?: SortOrder
    hostname?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AppUpdateCountOrderByAggregateInput
    _avg?: AppUpdateAvgOrderByAggregateInput
    _max?: AppUpdateMaxOrderByAggregateInput
    _min?: AppUpdateMinOrderByAggregateInput
    _sum?: AppUpdateSumOrderByAggregateInput
  }

  export type AppUpdateScalarWhereWithAggregatesInput = {
    AND?: AppUpdateScalarWhereWithAggregatesInput | AppUpdateScalarWhereWithAggregatesInput[]
    OR?: AppUpdateScalarWhereWithAggregatesInput[]
    NOT?: AppUpdateScalarWhereWithAggregatesInput | AppUpdateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppUpdate"> | number
    event?: StringWithAggregatesFilter<"AppUpdate"> | string
    version?: StringWithAggregatesFilter<"AppUpdate"> | string
    platform?: StringWithAggregatesFilter<"AppUpdate"> | string
    arch?: StringWithAggregatesFilter<"AppUpdate"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AppUpdate"> | Date | string
    hostname?: StringNullableWithAggregatesFilter<"AppUpdate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AppUpdate"> | Date | string
  }

  export type AppUpdateCreateInput = {
    event: string
    version: string
    platform: string
    arch: string
    timestamp?: Date | string
    hostname?: string | null
    createdAt?: Date | string
  }

  export type AppUpdateUncheckedCreateInput = {
    id?: number
    event: string
    version: string
    platform: string
    arch: string
    timestamp?: Date | string
    hostname?: string | null
    createdAt?: Date | string
  }

  export type AppUpdateUpdateInput = {
    event?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUpdateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUpdateCreateManyInput = {
    id?: number
    event: string
    version: string
    platform: string
    arch: string
    timestamp?: Date | string
    hostname?: string | null
    createdAt?: Date | string
  }

  export type AppUpdateUpdateManyMutationInput = {
    event?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUpdateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    version?: SortOrder
    platform?: SortOrder
    arch?: SortOrder
    timestamp?: SortOrder
    hostname?: SortOrder
    createdAt?: SortOrder
  }

  export type AppUpdateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    version?: SortOrder
    platform?: SortOrder
    arch?: SortOrder
    timestamp?: SortOrder
    hostname?: SortOrder
    createdAt?: SortOrder
  }

  export type AppUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    version?: SortOrder
    platform?: SortOrder
    arch?: SortOrder
    timestamp?: SortOrder
    hostname?: SortOrder
    createdAt?: SortOrder
  }

  export type AppUpdateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}